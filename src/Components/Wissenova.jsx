import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import "../Styles/Wissenova.css";

gsap.registerPlugin(ScrollTrigger);

const featuredRankings = [
  { name: "Tejal Gondhaekar", className: "10th", position: "1st", points: 100, medal: "gold" },
  { name: "Nysa karim", className: "12th", position: "1st", points: 100, medal: "gold" },
  { name: "Ayush Kishore", className: "12th", position: "2nd", points: 80, medal: "silver" },
];

const remainingRankings = [
  { name: "Sarvesh Girish Sagare", className: "11th", position: "3rd", points: 60 },
  { name: "Saanvi Agrawal", className: "12th", position: "4th", points: 40 },
  { name: "Pulakit gattani", className: "11th", position: "5th", points: 20 },
];

export default function Wissenova() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return undefined;

      const intro = section.querySelector(".wissenova-intro");
      const featured = section.querySelector(".wissenova-featured");
      const featuredCards = gsap.utils.toArray(".wissenova-featured-card", section);
      const rankingList = section.querySelector(".wissenova-ranking-list");
      const rankingRows = gsap.utils.toArray(".wissenova-ranking-row", section);
      const note = section.querySelector(".wissenova-note");
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([intro, featuredCards, rankingRows, note], { clearProps: "all" });
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const reveal = (targets, trigger, options = {}) =>
          gsap.from(targets, {
            autoAlpha: 0,
            y: 28,
            duration: 0.72,
            ease: "power3.out",
            stagger: options.stagger || 0,
            scrollTrigger: {
              trigger,
              start: "top 82%",
              once: true,
            },
          });

        reveal(intro, intro);
        reveal(featuredCards, featured, { stagger: 0.12 });
        reveal(rankingRows, rankingList, { stagger: 0.09 });
        reveal(note, note);
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section id="wissenova-rankings" ref={sectionRef} className="wissenova-section" aria-labelledby="wissenova-heading">
      <div className="wissenova-shell">
        <header className="wissenova-intro">
          <p className="wissenova-kicker">Aarohan knowledge challenge</p>
          <h2 id="wissenova-heading">Wissenova Rankings</h2>
          <p className="wissenova-description">
            Wissenova is a biweekly knowledge challenge designed to test your curiosity and problem-solving skills. Every alternate Sunday, new questions are released on Aarohan&apos;s socials. Submit your answers each week, climb the leaderboard, and compete with others for exciting prizes!
          </p>
        </header>

        <div className="wissenova-featured" aria-label="Top Wissenova performers">
          {featuredRankings.map((entrant) => (
            <article key={entrant.name} className={`wissenova-featured-card wissenova-featured-card--${entrant.medal}`}>
              <div className="wissenova-medal" aria-hidden="true">
                <span>{entrant.position}</span>
              </div>
              <p className="wissenova-featured-label">{entrant.position === "1st" ? "Joint first" : "Second place"}</p>
              <h3>{entrant.name}</h3>
              <dl className="wissenova-featured-details">
                <div>
                  <dt>Class</dt>
                  <dd>{entrant.className}</dd>
                </div>
                <div>
                  <dt>Points</dt>
                  <dd>{entrant.points}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="wissenova-ranking-list" aria-label="Wissenova rankings from third to fifth place">
          <div className="wissenova-ranking-head" aria-hidden="true">
            <span>Rank</span>
            <span>Participant</span>
            <span>Class</span>
            <span>Position</span>
            <span>Points</span>
          </div>
          <ol>
            {remainingRankings.map((entrant) => (
              <li key={entrant.name} className="wissenova-ranking-row">
                <span className="wissenova-rank-number" aria-label={`Rank ${entrant.position}`}>{entrant.position}</span>
                <span className="wissenova-entrant-name">{entrant.name}</span>
                <span className="wissenova-row-stat"><small>Class</small>{entrant.className}</span>
                <span className="wissenova-row-stat"><small>Position</small>{entrant.position}</span>
                <span className="wissenova-row-stat wissenova-points"><small>Points</small>{entrant.points}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="wissenova-note">Points are awarded according to the accuracy and response time of each answer.</p>
      </div>
    </section>
  );
}
