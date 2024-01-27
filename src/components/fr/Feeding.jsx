import { useState } from "react";
import "@styles/Feeding.scss";
// import { PiBellRinging } from "react-icons/pi";
import { IMAGE_BASE_URL } from "@/lib/contants";

const feedingToday = [
  {
    time: "10:00",
    name: "Black Panther",
    index: 1,
  },
  {
    time: "12:00",
    name: "Lion cub",
    index: 2,
  },
  {
    time: "12:30",
    name: "Serval",
    index: 3,
  },

  {
    time: "14:00",
    name: "White lion",
    index: 4,
  },
  {
    time: "14:30",
    name: "Lioness",
    index: 5,
  },
  {
    time: "16:00",
    name: "Bengal tiger",
    index: 6,
  },
];
const feedingTomorrow = [
  {
    time: "9:30",
    name: "African Lion",
    index: 8,
  },
  {
    time: "11:00",
    name: "Lioness",
    index: 9,
  },
  {
    time: "12:00",
    name: "Cheetah",
    index: 7,
  },
  {
    time: "13:30",
    name: "Siberian Tiger",
    index: 6,
  },
  {
    time: "14:30",
    name: "Lioness",
    index: 5,
  },
  {
    time: "16:00",
    name: "White Lion",
    index: 4,
  },
];

export default function Feeding() {
  const [day, setDay] = useState("today");
  const dayFeeding = day === "today" ? feedingToday : feedingTomorrow;
  return (
    <section className="feeding">
      <div className="container feeding__container">
        <div className="feeding__left">
          <h2 className="heading-second feeding__title">
            Programme d'alimentation
          </h2>
          <h3 className="heading-third feeding__title2">
            Approchez-vous de près de nos animaux lors des sessions
            d'alimentation
          </h3>
          <p className="paragraph feeding__text">
            Nourrissez-vous de moments inoubliables avec nos animaux pendant les
            sessions d'alimentation. Nos animaux choisissent entre se promener à
            la vue des visiteurs ou chercher un abri. Rejoignez une session
            d'alimentation pour une opportunité garantie de voir vos animaux
            préférés. Regardez notre personnel dévoué nourrir le renard
            arctique, le renard, le phoque à moustaches et les autres résidents
            de l'enclos. Nos gardiens compétents partageront des histoires
            captivantes sur ces créatures incroyables.
            <br />
            <br />
            N'en manquez pas – choisissez une date et arrivez à l'heure !
          </p>
          <a className="cta feeding__cta" href="/fr/Tickets">
            Choisissez une date
          </a>
        </div>
        <div className="feeding__right">
          <div className="feeding__right--top">
            <button
              onClick={() => setDay("today")}
              className={`select-btn-bg feeding__select ${
                day === "today" && "selected"
              }`}>
              Aujourd'hui
            </button>
            <button
              onClick={() => setDay("tomorrow")}
              className={`select-btn-bg feeding__select ${
                day === "tomorrow" && "selected"
              }`}>
              Demain
            </button>
            <a href="#sub" className="feeding__sub">
              S'abonner
            </a>
          </div>
          <div className="feeding__right--bottom">
            {dayFeeding.map((item, index) => (
              <div key={index} className="feeding__card">
                <img
                  src={`${IMAGE_BASE_URL}/swiper_${item.index + 1}.jpg`}
                  alt={item.name}
                />
                <p className="feeding__time">{item.time}</p>
                <p className="feeding__name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
