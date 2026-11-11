import { Component, ElementRef, HostListener, viewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";

interface Project {
  title: string;
  description: string;
  tags: string[];
  demo?: string;
  code?: string;
  image?: string;
}

interface Station {
  date: string;
  title: string;
  place: string;
  text?: string;
  points?: string[];
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
  protected stations: Station[] = [
    {
      date: "08/2026 – 11/2026 (laufend)",
      title: "Weiterbildung QA Automation",
      place: "RedRover School, Online-Kurs",
      text: "Inhalte: QA-Theorie, MySQL, Testautomatisierung mit Python (Pytest, Selenium) und TypeScript (Playwright).",
    },
    {
      date: "05/2025 – 02/2026",
      title: "Praktikum als Software Developer (Angular)",
      place: "IT-Labs GmbH, Fürth",
      points: [
        "Mitarbeit im Scrum-Team an der Alberta-App (Angular, Ionic, TypeScript), einer produktiven Cross-Platform-App für Pflegefachkräfte (Web, Android, iOS): Entwicklung und Erweiterung von UI-Features sowie Analyse und Behebung von Bugs in der bestehenden Codebasis",
        "Einheitliches Erscheinungsbild: Umsetzung von Figma-Designs (u. a. Synchronisationsbildschirm für verschiedene Geräte) in enger Abstimmung mit der Designerin; Nutzung und Erweiterung der Storybook-Komponentenbibliothek für einheitliche Darstellung und Benennung",
        "Qualitätssicherung: Erstellung eines Testplans für eine Anwendung ohne bisherige systematische manuelle Tests; Feature-Tests und Release-Tests in der Staging-Umgebung auf Android, iOS und Web",
        "Teamarbeit: Aufgaben als User Stories in Azure DevOps (Boards); Änderungen per Pull Request mit Code Review im Vier-Augen-Prinzip",
        "IHK-Abschlussprojekt (80 Std.): Neugestaltung des Synchronisationsbildschirms der offlinefähigen App, der bisher keine Rückmeldung zum Stand und keine Abbruchmöglichkeit bot; vier selbst formulierte User Stories, Umsetzung nach Figma-Designs",
        "Ergebnis: Pflegefachkräfte sehen den Fortschritt in Prozent in Echtzeit, können die Synchronisation abbrechen und die App sofort nutzen und erhalten Tipps in einer Infobox; Funktions- und Usability-Tests auf Android und iOS, Übergabe an IT-Labs, Dokumentation inkl. UML-Diagrammen, Präsentation und Verteidigung bei der IHK",
      ],
    },
    {
      date: "02/2024 – 02/2026",
      title:
        "Umschulung zur Fachinformatikerin für Anwendungsentwicklung (IHK)",
      place: "GFN GmbH, Nürnberg",
      text: "Schwerpunkte: Anwendungsentwicklung (objektorientierte Programmierung (OOP), Grundlagen Python und Java, Benutzerschnittstellen, kundenspezifische Anwendungen), Datenbanken und SQL, systemübergreifende Datenbereitstellung, IT-Sicherheit (Schutzbedarfsanalyse), Netzwerke und Dienste, Projektmanagement, UML-Modellierung, Fachenglisch, Serviceanfragen.",
      points: [
        "IHK-Abschlussprojekt: Entwicklung eines modernen Synchronisationsbildschirms für die Alberta-App (umgesetzt im Praktikum bei IT-Labs, Projektdokumentation inkl. User Stories, UML-Diagrammen und Präsentation) erfolgreich abgeschlossen",
      ],
    },
    {
      date: "12/2023 – 01/2024",
      title: "Vorbereitungskurs IT-Umschulung",
      place: "GFN GmbH, Nürnberg",
      text: "Grundlagen der IT-Technik und Anwendungsentwicklung, Algorithmen, Netzwerke, digitale Sicherheit, IT-Service-Management.",
    },
    {
      date: "10/2023 – 11/2023",
      title: "Erprobungscenter für Digitale Berufe",
      place: "DCI, Berlin",
      points: [
        "Web Development (HTML, CSS) mit Abschlussprojekt: Bau und Präsentation einer eigenen Webseite",
        "Online-Marketing (SEO, SEA, Social Media)",
      ],
    },
    {
      date: "2021 – 2023",
      title: "Integrationsphase in Deutschland",
      place: "Integrations- und Sprachkurse",
      text: "Vorbereitung auf den deutschen Arbeitsmarkt (Deutsch bis B2 Beruf).",
    },
    {
      date: "06/2017 – 02/2021",
      title: "Social Media Managerin",
      place: "Selbstständig, remote",
      points: [
        "Aufbau und Betreuung von Kunden-Accounts auf Instagram, Facebook/Meta und VK, oft ausgehend von null: Content-Plan, Fotos, Texte und Design, teils komplett übernommen, teils mit Anleitung zur eigenen Umsetzung",
        "Mehr Reichweite, Follower, Anfragen und Verkäufe für Kunden durch Algorithmus-Optimierung, gezielte Werbung (Targeting) und Auswertung der Ergebnisse",
        "Neukunden kamen über die eigene Social-Media-Präsenz ohne aktive Akquise",
      ],
    },
    {
      date: "05/2014 – 08/2020",
      title: "Projektmanagerin",
      place:
        "Werbeagentur, Krasnodar (zunächst angestellt in einer anderen Agentur, ab 2015 Mitgründerin der eigenen Agentur)",
      points: [
        "Kundenbasis von Grund auf aufgebaut, vom Kleinauftrag bis zu Handelsketten und Einkaufszentren (über 50 Kunden); über Kontakte zu Centermanagern Erstaufträge bei Neueröffnungen und anschließend Weiterempfehlung als zuverlässiger Dienstleister",
        "Projektleitung von der Anfrage bis zur Übergabe (Kundenkommunikation, Produktionskontrolle, Materialbestellung, Abrechnung) mit Koordination von Mitarbeitenden, Monteuren und Druckereien; Termine eingehalten",
        "Viele Stammkunden mit Folgeaufträgen",
      ],
    },
    {
      date: "09/2009 – 07/2014",
      title:
        "Bachelor of Arts, Wirtschaftswissenschaft (in Deutschland anerkannt)",
      place: "Russische Staatliche Sozialuniversität, Moskau",
      text: "Diplom „Spezialistin für Werbung“.",
    },
  ];
  private video = viewChild<ElementRef<HTMLVideoElement>>("avatarVideo");

  // Sekunden im Video: Blick nach links, geradeaus und nach rechts
  private readonly tLeft = 2.5;
  private readonly tCenter = 4.2;
  private readonly tRight = 6.5;

  onVideoReady() {
    const video = this.video()?.nativeElement;
    if (video) {
      video.currentTime = this.tCenter;
    }
  }

  @HostListener("window:mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    const video = this.video()?.nativeElement;
    if (!video) {
      return;
    }
    // -1 = Cursor am linken Rand, 0 = in der Mitte, 1 = am rechten Rand
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const time =
      x < 0
        ? this.tLeft + (this.tCenter - this.tLeft) * (x + 1)
        : this.tCenter + (this.tRight - this.tCenter) * x;
    video.currentTime = time;
  }
}
