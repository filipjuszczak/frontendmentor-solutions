import fiveStarsImg from "../assets/images/illustration-five-stars.webp";
import multiplePlatformsImg from "../assets/images/illustration-multiple-platforms.webp";
import consistentScheduleImg from "../assets/images/illustration-consistent-schedule.webp";
import schedulePostsImg from "../assets/images/illustration-schedule-posts.webp";
import followerGrowthImg from "../assets/images/illustration-grow-followers.webp";
import audienceGrowthImg from "../assets/images/illustration-audience-growth.webp";
import createPostImg from "../assets/images/illustration-create-post.webp";
import aiContentImg from "../assets/images/illustration-ai-content.webp";

export default function BentoGrid() {
  return (
    <div className="grid max-w-[70rem] gap-8 px-4 py-10 xl:grid-cols-[16rem_1fr]">
      <div className="grid gap-8 md:grid-cols-2 xl:col-start-2 xl:grid-cols-[repeat(3,16rem)]">
        <div className="rounded-[10px] bg-purple-500 px-8 py-10 md:col-span-2 md:px-[4.75rem] md:py-18">
          <div className="flex flex-col items-center gap-4 text-white">
            <div className="text-center text-[clamp(2.875rem,2.5229rem+1.5023vw,3.875rem)] leading-[93.5%] font-medium tracking-[-3px]">
              Social Media <span className="text-yellow-500">10x</span>{" "}
              <em>Faster</em> with AI
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src={fiveStarsImg}
                alt="Five yellow stars"
                width={192}
                height={32}
                className="h-8"
              />
              <div className="text-[1.125rem]">Over 4,000 5-star reviews</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 overflow-hidden rounded-[10px] bg-white p-4 md:justify-between">
          <img
            src={multiplePlatformsImg}
            alt="Social media profile cards"
            width={316}
            height={66}
          />

          <div className="xxl:leading-[28px] text-[clamp(1.625rem,1.493rem+0.5634vw,2rem)] leading-[24px] tracking-[-2px] md:max-w-[12ch]">
            Manage multiple accounts and platforms.
          </div>
        </div>

        <div className="overflow-hidden rounded-[10px] bg-yellow-500 p-4">
          <div className="xxl:leading-[28px] text-[clamp(1.625rem,1.493rem+0.5634vw,2rem)] leading-[24px] tracking-[-2px] md:max-w-[15ch]">
            Maintain a consistent posting schedule.
          </div>

          <img
            src={consistentScheduleImg}
            alt="Calendar for August 2024"
            width={208}
            height={157}
            className="relative top-[20px]"
          />
        </div>

        <div className="flex flex-col items-center gap-6 overflow-hidden rounded-[10px] bg-purple-100 py-8 text-center md:col-span-2 xl:col-start-3 xl:row-span-2 xl:row-start-1 xl:items-start xl:justify-between xl:p-8 xl:text-start">
          <div className="xxl:leading-[28px] text-[clamp(1.625rem,1.493rem+0.5634vw,2rem)] leading-[24px] font-medium tracking-[-2px]">
            Schedule to social media.
          </div>

          <img
            src={schedulePostsImg}
            alt="Schedule posts"
            width={308}
            height={272}
            className="px-[18px] md:px-0 xl:relative xl:left-[100px] xl:scale-200"
          />

          <div className="px-8 text-[1.125rem] leading-[20px] md:max-w-[34ch] xl:px-0">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </div>
        </div>

        <div className="grid place-items-center gap-10 rounded-[10px] bg-purple-500 p-6 md:col-span-2 md:grid-cols-2 xl:col-span-3 xl:col-start-2">
          <img
            src={followerGrowthImg}
            alt="Follower growth"
            width={227}
            height={200}
            className="md:justify-self-end"
          />

          <div className="xxl:leading-[36px] text-center text-[clamp(2rem,1.8239rem+0.7512vw,2.5rem)] leading-[28px] font-medium tracking-[-2px] text-white md:text-start">
            Grow followers with non-stop content.
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-[10px] bg-white p-6 md:col-span-2 md:flex-row md:items-center md:justify-between xl:col-span-1 xl:row-start-3 xl:flex-col xl:items-start">
          <div className="space-y-4">
            <div className="text-[clamp(2.875rem,2.5229rem+1.5023vw,3.875rem)] leading-[42px] tracking-[-3px]">
              {">"}56%
            </div>

            <div className="text-[1.125rem] leading-[20px]">
              faster audience growth
            </div>
          </div>

          <img
            src={audienceGrowthImg}
            alt="Three avatar images"
            width={179}
            height={66}
          />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:row-start-1 xl:grid-cols-none">
        <div className="flex flex-col gap-6 rounded-[10px] bg-yellow-100 p-8 md:justify-center">
          <div className="xxl:leading-[36px] text-[clamp(2rem,1.8239rem+0.7512vw,2.5rem)] leading-[28px] font-medium tracking-[-2px]">
            Create and schedule content{" "}
            <em className="text-purple-500">quicker.</em>
          </div>

          <img
            src={createPostImg}
            alt="Create post button"
            width={190}
            height={90}
          />
        </div>

        <div className="xxl:justify-between flex flex-col gap-6 rounded-[10px] bg-yellow-500 p-6">
          <div className="xxl:leading-[36px] text-[clamp(2rem,1.8239rem+0.7512vw,2.5rem)] leading-[28px] tracking-[-2px]">
            Write your content using AI.
          </div>

          <img src={aiContentImg} alt="AI content" width={220} height={222} />
        </div>
      </div>
    </div>
  );
}
