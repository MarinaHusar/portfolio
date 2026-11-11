import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

interface Project {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  code?: string;
  image?: string;
}

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected title = "portfolio";
  protected skillGroups = [
    {
      title: "Frontend",
      items: [
        "HTML5",
        "SCSS",
        "JavaScript",
        "TypeScript",
        "Angular",
        "Ionic",
        "React (Grundlagen)",
      ],
    },
    {
      title: "Testing & QA",
      items: [
        "Testpläne",
        "Manuelle Tests",
        "Selenium",
        "Playwright",
        "Pytest",
      ],
    },
    {
      title: "Backend & Daten",
      items: ["Node.js", "Python", "Java (Grundlagen)", "SQL", "MySQL"],
    },
    {
      title: "Tools & Methoden",
      items: [
        "Git / GitHub",
        "Azure DevOps",
        "Jira",
        "Scrum",
        "Figma",
        "Storybook",
      ],
    },
    {
      title: "Sprachen",
      items: [
        "Deutsch B2-C1 (B2-Beruf-Zertifikat)",
        "Englisch B1 (fachlich)",
        "Russisch (Muttersprache)",
      ],
    },
  ];
  protected projects: Project[] = [
    {
      title: "Mein Kalorientagebuch",
      description:
        "Web-App für Ernährungs- und Gesundheitstracking: Kalorienbedarf nach Mifflin-St Jeor, Ernährungstagebuch mit Produktsuche über die Open Food Facts API, Wasser-Tracker und 7-Tage-Statistik.",
      tags: ["Angular 20", "Ionic", "TypeScript", "SCSS"],
      demo: "https://kalorien-app-husar.netlify.app",
      code: "https://github.com/MarinaHusar/kalorien-app",
    },
    {
      title: "Synchronisationsbildschirm (IHK-Abschlussprojekt)",
      description:
        "Neugestaltung des Synchronisationsbildschirms der offlinefähigen Alberta-App: Pflegefachkräfte sehen den Fortschritt in Prozent, können abbrechen und die App sofort nutzen. Umgesetzt im Praktikum bei IT-Labs.",
      tags: ["Angular", "Ionic", "TypeScript", "Figma"],
    },
    {
      title: "Frenchie – interaktive Startseite",
      description:
        "Konzept einer Website-Startseite mit einem Frenchie-Video, das auf die Cursor-Bewegung reagiert. Eigenes Lernprojekt, aktuell in Arbeit.",
      tags: ["in Arbeit"],
    },
  ];
}
