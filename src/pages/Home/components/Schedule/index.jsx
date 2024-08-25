import { Fragment } from "react";
// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// components
import Day from "./Day";
import ScheduleItem from "./ScheduleItem";
// assets
import translations from "src/language/translations";

const Schedule = () => {
  const language = useRecoilValue(languageState);

  const daysOfWeek = [
    translations[language].home.schedule.daysOfWeek.monday,
    translations[language].home.schedule.daysOfWeek.thursday,
  ];

  const schedule = [
    {
      day: "Monday",
      kids: translations[language].home.schedule.scheduleItem.time.kids,
      adults: translations[language].home.schedule.scheduleItem.time.adults,
      childrenTraining:
        translations[language].home.schedule.scheduleItem.event
          .childrenTraining,
      adultsTraining:
        translations[language].home.schedule.scheduleItem.event.adultsTraining,
    },
    {
      day: "Thursday",
      kids: translations[language].home.schedule.scheduleItem.time.kids,
      adults: translations[language].home.schedule.scheduleItem.time.adults,
      childrenTraining:
        translations[language].home.schedule.scheduleItem.event
          .childrenTraining,
      adultsTraining:
        translations[language].home.schedule.scheduleItem.event.adultsTraining,
    },
  ];

  return (
    <section
      id="schedule"
      className="border-t border-zinc-400 p-5 pb-12 lg:px-12"
    >
      <h2 className="mb-5 text-center text-2xl font-bold lg:text-3xl">
        {translations[language].home.schedule.title}
      </h2>

      <div className="w-full min-[425px]:mx-auto min-[425px]:max-w-[500px]">
        <div className="overflow-hidden rounded-xl bg-white px-5 pt-4 shadow-lg">
          <h3 className="text-center text-lg leading-normal underline">
            {translations[language].home.schedule.subTitle}
          </h3>

          <div className="flex flex-col items-center p-5 min-[425px]:flex-row min-[425px]:justify-around md:flex-row md:justify-around">
            {daysOfWeek.map((day, index) => (
              <Fragment key={day}>
                <div className="w-full text-center first:mb-5 min-[425px]:w-auto min-[425px]:text-left min-[425px]:first:mb-0">
                  <Day name={day} />
                  <ScheduleItem
                    kids={schedule[index]?.kids}
                    adults={schedule[index]?.adults}
                    childrenTraining={schedule[index]?.childrenTraining}
                    adultsTraining={schedule[index]?.adultsTraining}
                  />
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
