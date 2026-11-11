import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

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
}
