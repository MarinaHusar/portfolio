import {
  Component,
  ElementRef,
  HostListener,
  signal,
  viewChild,
} from "@angular/core";
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
  art: "ausbildung" | "beruf";
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
      date: "08/2026 – 12/2026 (laufend)",
      art: "ausbildung",
      title: "Weiterbildung QA Automation",
      place: "RedRover School, Online-Kurs",
      text: "Inhalte: QA-Theorie, MySQL, Testautomatisierung mit Python (Pytest, Selenium) und TypeScript (Playwright).",
    },
    {
      date: "05/2025 – 02/2026",
      art: "beruf",
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
      art: "ausbildung",
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
      art: "ausbildung",
      title: "Vorbereitungskurs IT-Umschulung",
      place: "GFN GmbH, Nürnberg",
      text: "Grundlagen der IT-Technik und Anwendungsentwicklung, Algorithmen, Netzwerke, digitale Sicherheit, IT-Service-Management.",
    },
    {
      date: "10/2023 – 11/2023",
      art: "ausbildung",
      title: "Erprobungscenter für Digitale Berufe",
      place: "DCI, Berlin",
      points: [
        "Web Development (HTML, CSS) mit Abschlussprojekt: Bau und Präsentation einer eigenen Webseite",
        "Online-Marketing (SEO, SEA, Social Media)",
      ],
    },
    {
      date: "05/2014 – 02/2021",
      art: "beruf",
      title: "Projektmanagement, Social Media Marketing und Kundenbetreuung",
      place:
        "Werbeagentur, Krasnodar (zunächst angestellt in einer anderen Agentur, ab 2015 Mitgründerin der eigenen Agentur)",
      points: [
        "Tätigkeit als Projektmanagerin in einem Unternehmen mit Verantwortung für die Koordination von Projekten und Kundenkommunikation",
        "Anschließende Gründung und Führung eines eigenen Unternehmens",
        "Planung und Umsetzung von Social-Media-Marketing-Maßnahmen und digitalen Kommunikationsstrategien",
        "Betreuung von Kunden, Koordination von Aufgaben und Organisation laufender Projekte",
        "Eigenverantwortliche Planung und Steuerung von Arbeitsabläufen und Kundenprojekten",
      ],
    },
    {
      date: "09/2009 – 07/2014",
      art: "ausbildung",
      title:
        "Bachelor of Arts, Wirtschaftswissenschaft (in Deutschland anerkannt)",
      place: "Russische Staatliche Sozialuniversität, Moskau",
      text: "Diplom „Spezialistin für Werbung“.",
    },
  ];

  // Die Stationen werden nach Art getrennt, damit die Seite zwei Abschnitte zeigen kann
  protected ausbildung = this.stations.filter((s) => s.art === "ausbildung");
  protected berufserfahrung = this.stations.filter((s) => s.art === "beruf");

  // Beide Abschnitte mit Überschrift, damit app.html sie nacheinander anzeigen kann
  protected gruppen = [
    { titel: "Berufserfahrung", stationen: this.berufserfahrung },
    { titel: "Ausbildung", stationen: this.ausbildung },
  ];

  // Ist das Menü auf dem Handy geöffnet?
  protected menuOffen = signal(false);

  protected toggleMenu() {
    this.menuOffen.update((offen) => !offen);
  }

  protected closeMenu() {
    this.menuOffen.set(false);
  }
  // Zeigt den Nach-oben-Button erst, wenn man etwas nach unten gescrollt hat
  protected zeigeNachOben = signal(false);

  // Welcher Abschnitt gerade im Bild ist (für die Hervorhebung im Menü)
  protected aktiveSektion = signal("");
  private readonly sektionen = [
    "technologien",
    "projekte",
    "werdegang",
    "kontakt",
  ];

  @HostListener("window:scroll")
  onScroll() {
    this.zeigeNachOben.set(window.scrollY > 500);

    let aktiv = "";
    for (const id of this.sektionen) {
      const element = document.getElementById(id);
      // Ein Abschnitt zählt als aktiv, sobald seine Oberkante fast oben im Fenster ist
      if (element && element.offsetTop - 150 <= window.scrollY) {
        aktiv = id;
      }
    }
    // Ganz unten auf der Seite ist immer "Kontakt" aktiv
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      aktiv = "kontakt";
    }
    this.aktiveSektion.set(aktiv);
  }

  private video = viewChild<ElementRef<HTMLVideoElement>>("avatarVideo");

  // Sekunden im Video: Blick nach links, geradeaus und nach rechts
  private readonly tLeft = 2.5;
  private readonly tCenter = 4.2;
  private readonly tRight = 6.5;
  // Geräte ohne Maus (Handy, Tablet): der Kopf dreht sich von allein
  private ohneMaus = window.matchMedia("(hover: none)").matches;

  // Wohin der Kopf drehen soll und wo das Video gerade steht
  private targetTime = this.tCenter;
  private currentTime = this.tCenter;

  constructor() {
    this.animate();
  }

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
    // Mitte des Avatars auf dem Bildschirm
    const rect = video.getBoundingClientRect();
    const mitte = rect.left + rect.width / 2;

    // -1 = ganz links im Fenster, 0 = Cursor auf Höhe des Avatars, 1 = ganz rechts
    const x =
      event.clientX < mitte
        ? (event.clientX - mitte) / mitte
        : (event.clientX - mitte) / (window.innerWidth - mitte);

    // Nur das Ziel merken, bewegt wird in animate()
    this.targetTime =
      x < 0
        ? this.tLeft + (this.tCenter - this.tLeft) * (x + 1)
        : this.tCenter + (this.tRight - this.tCenter) * x;
  }

  // Läuft dauernd und bewegt das Video langsam zum Ziel
  private animate() {
    const video = this.video()?.nativeElement;
    const differenz = this.targetTime - this.currentTime;
    // Ohne Maus: ruhiges Hin- und Herschwingen zwischen links und rechts (ca. 11 Sekunden pro Runde)
    if (this.ohneMaus) {
      const welle = Math.sin(performance.now() / 1800);
      this.targetTime =
        welle >= 0
          ? this.tCenter + welle * (this.tRight - this.tCenter)
          : this.tCenter + welle * (this.tCenter - this.tLeft);
    }
    if (video && Math.abs(differenz) > 0.001) {
      this.currentTime += differenz * 0.05;
      video.currentTime = this.currentTime;
    }
    requestAnimationFrame(() => this.animate());
  }
}
