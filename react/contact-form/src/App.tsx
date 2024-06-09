import { useEffect, useState, useReducer } from "react";
import { createPortal } from "react-dom";
import ContactForm from "./components/ContactForm";
import Modal from "./components/Modal";

enum ACTIONS {
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_EMAIL,
  SET_QUERYTYPE,
  SET_MESSAGE,
  SET_CONSENT,
  SET_ERROR,
  RESET
}

interface Action {
  type: ACTIONS;
  payload?: string | object | boolean;
}

interface State {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
  errors: {
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    queryType?: boolean;
    message?: boolean;
    consent?: boolean;
  };
}

const initialState: State = {
  firstName: "",
  lastName: "",
  email: "",
  queryType: "",
  message: "",
  consent: false,
  errors: {}
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case ACTIONS.SET_FIRSTNAME:
      return {
        ...state,
        firstName: action.payload as string
      };
    case ACTIONS.SET_LASTNAME:
      return {
        ...state,
        lastName: action.payload as string
      };
    case ACTIONS.SET_EMAIL:
      return {
        ...state,
        email: action.payload as string
      };
    case ACTIONS.SET_QUERYTYPE:
      return {
        ...state,
        queryType: action.payload as string
      };
    case ACTIONS.SET_MESSAGE:
      return {
        ...state,
        message: action.payload as string
      };
    case ACTIONS.SET_CONSENT:
      return {
        ...state,
        consent: !state.consent
      };
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        errors: {
          ...(action.payload as {
            firstName?: boolean;
            lastName?: boolean;
            email?: boolean;
            queryType?: boolean;
            message?: boolean;
            consent?: boolean;
          })
        }
      };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const data = {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    queryType: state.queryType,
    message: state.message,
    consent: state.consent,
    errors: state.errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: State["errors"] = {};

    if (!state.firstName) {
      console.log("no first name");
      errors.firstName = true;
    }

    if (!state.lastName) {
      console.log("no last name");
      errors.lastName = true;
    }

    if (!state.email) {
      console.log("no email");
      errors.email = true;
    }

    if (!state.queryType) {
      console.log("no query type");
      errors.queryType = true;
    }

    if (!state.message) {
      console.log("no message");
      errors.message = true;
    }

    if (!state.consent) {
      console.log("no consent");
      errors.consent = true;
    }

    if (Object.keys(errors).length > 0) {
      dispatch({
        type: ACTIONS.SET_ERROR,
        payload: errors
      });
      return;
    }

    console.log("submitted", state);
    dispatch({ type: ACTIONS.RESET });
    setIsModalVisible(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsModalVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isModalVisible]);

  const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ACTIONS.SET_FIRSTNAME, payload: e.target.value });
  };

  const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ACTIONS.SET_LASTNAME, payload: e.target.value });
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ACTIONS.SET_EMAIL, payload: e.target.value });
  };

  const handleChangeQueryType = (type: string) => {
    dispatch({ type: ACTIONS.SET_QUERYTYPE, payload: type });
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: ACTIONS.SET_MESSAGE, payload: e.target.value });
  };

  const handleChangeConsent = () => {
    dispatch({ type: ACTIONS.SET_CONSENT });
  };

  const handlers = {
    setFirstName: handleChangeFirstName,
    setLastName: handleChangeLastName,
    setEmail: handleChangeEmail,
    setQueryType: handleChangeQueryType,
    setMessage: handleChangeMessage,
    setConsent: handleChangeConsent,
    handleSubmit
  };

  return (
    <div className="relative flex min-h-screen items-center bg-lightGreen px-4 py-8">
      <main className="mx-auto w-[48rem] max-w-[64rem] rounded-2xl bg-white p-12">
        <ContactForm data={data} handlers={handlers} />
      </main>
      {isModalVisible &&
        createPortal(<Modal />, document.querySelector("#modal")!)}
    </div>
  );
}
