import React, { Component } from 'react';
import mentalProcess from './forløb-1.png';
import mentalAndPhysicalProcess from './forløb-2.png';

export default  class Processes extends Component {
  render() {
    return (
        <div id="processes-wrapper">
            <div id="process-container">
                <h1>Mentaltrænings forløb</h1>
                <p>Dette forløb er udarbejdet i samarbejde med elitesports klubber og atleter, 
                    med forkus at øge ens præstation samt mentale robusthed. 
                    Dette forløb kan blandt andet hjælpe dig eller en af dine medarbejdere til
                    at få mere mentalt overskud i hverdagen, samt hjælpe en med at kunne 
                    præstere bedre under pressede situation. 
                </p>
                <p> Forskning viser at mentaltræning kan være med til at hjælpe en til at 
                    blive mere fri fra sygdomme og psykiske problemer. Dette forløb har dog ikke
                    fokus på sygdomme eller mistrivslen i fælleskabet, 
                    men forløbet arbejder i stedet ud fra at forbedre den sundhed der
                    allerede eksisterer.
                </p>
                <p> For at kunne vide hvilket niveau vi starter på og hvor vi skal sigte efter,
                    vil forløbet starter med en benchmark test der viser, 
                    hvordan den nuværende mentale robusthed ser ud, og hvilke styrker og svagheder
                    vi skal arbejde med. 
                </p> 
                <p> Igennem forløbet vil vi så udføre mentale øvelser der vil være med til
                    at forbedre ens mentale niveau.</p>
                <p> Til sidst vil vi afslutte forløbet med den samme benchmark test igen, for at
                    få et klart overblik over udviklingen og de indvirkninger som 
                    de mentale øvelser havde.</p>
                <p> De mental øvelserne som man gennem forløbet vil blive introduceret for,
                    kan både udføres mens man er på arbejde eller sidder hjemme i stuen.
                    De tager ikke meget lang tid, hvilket betyder at man derfor ikke tager
                    tid væk fra ens øvrige prioriteter som der skal være plads til 
                    (herunder familien og arbejde).</p>
                    <img src={mentalProcess} alt="Mental training process"/>

                <h1>Fysisk- og mentaltrænings forløb</h1>
                <p> Skal du og dine medarbejder være mere fysiske og psykiske robuste? 
                    Gennem 10 års erfaring med elite sports og erhvervsvirksomheds træning, 
                    så kan mental og fysisk træning hjælpe alle medarbejder til at præstere bedre.
                </p>
                <p>
                Ved træning af psyken samt fysikken, kan det være med til at medarbejderne bliver stærkere socialt,
                 har færre sygedage og kan præstere bedre under pressede situationer. Mental øvelserne der anvendes 
                 til at skabe større mental robusthed, kan udføres, mens man er på arbejde, og det tager derfor ikke
                  tid fra arbejd/fri eller familietid.
                </p>
                <p>
                    Den fysiske træning bliver styret af en fast træner, og vil enten være før,
                   under eller efter arbejde, og vil arrangeres efter aftale.
                </p>
                <p>
                For at se udviklingen af medarbejderne vil der inden og efter forløbet være en benchmark test, og efterfølgende 
                en samtale til hjælp af videreudvikling. 
                </p>
                <img src={mentalAndPhysicalProcess} alt="Mental and physical training process"/>
            </div>
        </div>
    );
  }
}