// hook
import { useRecoilValue } from "recoil";
// atom
import { languageState } from "src/recoil";
// components
import Day from "./Day";
// assets
import translations from "src/language/translations";

const Schedule = () => {
  const language = useRecoilValue(languageState);

  const dayItem = [
    {
      index: "monday",
      day: translations[language].home.schedule.daysOfWeek.monday,
      kidsTime: translations[language].home.schedule.dayItem.time.kids,
      adultTime: translations[language].home.schedule.dayItem.time.adults,
      childrenTraining:
        translations[language].home.schedule.dayItem.event.childrenTraining,
      adultsTraining:
        translations[language].home.schedule.dayItem.event.adultsTraining,
    },
    {
      index: "tuesday",
      day: translations[language].home.schedule.daysOfWeek.tuesday,
      kidsTime: translations[language].home.schedule.dayItem.time.kids,
      adultTime: translations[language].home.schedule.dayItem.time.adults,
      childrenTraining:
        translations[language].home.schedule.dayItem.event.childrenTraining,
      adultsTraining:
        translations[language].home.schedule.dayItem.event.adultsTraining,
    },
    {
      index: "wednesday",
      day: translations[language].home.schedule.daysOfWeek.wednesday,
      kidsTime: translations[language].home.schedule.dayItem.time.kids,
      adultTime: translations[language].home.schedule.dayItem.time.adults,
      childrenTraining:
        translations[language].home.schedule.dayItem.event.childrenTraining,
      adultsTraining:
        translations[language].home.schedule.dayItem.event.adultsTraining,
    },
    {
      index: "thursday",
      day: translations[language].home.schedule.daysOfWeek.thursday,
      kidsTime: translations[language].home.schedule.dayItem.time.kids,
      adultTime: translations[language].home.schedule.dayItem.time.adults,
      childrenTraining:
        translations[language].home.schedule.dayItem.event.childrenTraining,
      adultsTraining:
        translations[language].home.schedule.dayItem.event.adultsTraining,
    },
    {
      index: "friday",
      day: translations[language].home.schedule.daysOfWeek.friday,
      kidsTime: translations[language].home.schedule.dayItem.time.kids,
      adultTime: translations[language].home.schedule.dayItem.time.adults,
      childrenTraining:
        translations[language].home.schedule.dayItem.event.childrenTraining,
      adultsTraining:
        translations[language].home.schedule.dayItem.event.adultsTraining,
    },
    {
      index: "saturday",
      day: translations[language].home.schedule.daysOfWeek.saturday,
      kidsTime: translations[language].home.schedule.dayItem.time.kids,
      adultTime: translations[language].home.schedule.dayItem.time.adults,
      childrenTraining:
        translations[language].home.schedule.dayItem.event.childrenTraining,
      adultsTraining:
        translations[language].home.schedule.dayItem.event.adultsTraining,
    },
    {
      index: "sunday",
      day: translations[language].home.schedule.daysOfWeek.sunday,
      kidsTime: translations[language].home.schedule.dayItem.time.kids,
      adultTime: translations[language].home.schedule.dayItem.time.adults,
      childrenTraining:
        translations[language].home.schedule.dayItem.event.childrenTraining,
      adultsTraining:
        translations[language].home.schedule.dayItem.event.adultsTraining,
    },
  ];

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white"></section>
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-xl bg-white p-4 shadow-lg min-[612px]:px-7 min-[612px]:py-5">
          <h3 className="text-center text-lg leading-normal underline">
            {translations[language].home.schedule.subTitle}
          </h3>

          <div className="mt-7 flex flex-col items-center gap-y-6 min-[612px]:grid min-[612px]:grid-cols-2 min-[612px]:gap-6 lg:mt-9 lg:grid-cols-3 xl:relative xl:grid-cols-[250px_250px_250px_250px] xl:grid-rows-2 xl:place-items-center xl:justify-center xl:gap-y-16 2xl:grid-cols-[300px_300px_300px_300px]">
            {dayItem.map((day, index) => (
              <div
                key={index}
                className={`min-[612px]:last:col-span-full min-[612px]:last:mx-auto min-[612px]:last:w-1/2 lg:last:w-1/3 xl:w-full xl:last:col-span-1 xl:last:w-full ${index >= 4 ? "xl:ml-64 xl:last:ml-32 2xl:ml-80 2xl:last:ml-40" : ""}`}
              >
                <Day
                  index={day.index}
                  day={day.day}
                  kidsTime={day.kidsTime}
                  adultTime={day.adultTime}
                  childrenTraining={day.childrenTraining}
                  adultsTraining={day.adultsTraining}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
