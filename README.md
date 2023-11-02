[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/JY37ovhx)
## Praktik opgave newsbox!
I denne praktikperiode skal I udvikle en nyheds webapplikation som er optimeret til den mobile skærm. I applikationen skal der listes nyheder fra The New York Times i et kategoriseret nyhedsoverblik. Det skal være muligt at vælge(klikke på) en nyhed i listen, hvorefter brugeren vil blive sendt videre til den fulde artikel på nytimes.com.<br><br>
Nyhedsartikler skal også kunne gemmes i et privat nyhedsarkiv. Gem funktionen bliver synlig når der swipes til venstre [se illustration](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/swipe-illustration.png "swipe illustration") på en nyhed. Fra det private nyhedsarkiv kan ligeledes tilgås artikler og artikler kan slettes. Slet funktionen bliver synlig når der swipes til venstre [se illustration](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/swipe-illustration.png "swipe illustration") på en arkiveret nyhed.<br><br>
Fra settings panelet skal brugeren have mulighed for at administrere det kategoriserede nyhedsoverblik ved at slå visning til eller fra for nyhedskategorier. Fra settings panelet skal brugeren også kunne skifte mellem lyst og mørkt tema.
<br>

### **Målet med opgaven er:**
* At arbejde med automatisering i din udviklingsproces.
* At arbejde med modularisering af css. 
* At arbejde med lagring af indstillinger og data.
* At optimere brugeroplevelsen gennem microinteractions og animationer.


## Applikations tech stack

HTML(structure)<br>
JavaScript(logic / data collection)<br>
Webpack(build system)<br>
Sass(css preprocessor)<br>
Netlify(host)<br>

## Opgavebeskrivelse og materiale

### **User Interface:**
Se XD fil (og billeder) i mappen projekt-UI.


3. **Automatisering**<br>
    Din udviklingsproces skal automatiseres med webpack. Du skal opsætte tasks til at flytte og behandle de filer du udvikler til en "dist"-mappe i din udviklingsproces.
    * flytter html filer.
    * behandler og sammenskriver sass-filer til en samlet css fil.
    * behandler javascript filer, og sammenskriver dem til én fil.
    * øvrige processer tilføjes efter behov.
     
   
4. **Animationer**<br>
   En nyhedskategori kan være "åben", så de relaterede artikler fremgår af en liste herunder. En nyhedskategori kan også være    "lukket", sådan at det kun er nyhedskategorien som fremgår af listen men ikke de relaterede artiker. Det er din opgave at      animere overgangen mellem "åben" / "lukket" tilstand på en lækker måde.
 
   I settingspanelt kan man "tænde og slukke" for nyhedskategorier. Det er din opgave at animere "kontakternes/switches"          overgang fra "tændt" til "slukket".
 

5. **Funktioner**<br>
   I settings-panelet skal brugeren have mulighed for at administrere det kategoriserede nyhedsoverblik ved at slå visning        til og fra på udvalgte nyhedskategorier. Det skal også være muligt at skifte mellem lyst og mørkt tema fra settings panelt    og applikationen skal "huske" indstillingerne. 
   
   Nyhedsartikler skal også kunne gemmes i et privat nyhedsarkiv. Gem funktionen bliver synlig når der swipes til venstre      [se illustration](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/swipe-illustration.png        "swipe illustration") på en nyhed. Fra det private nyhedsarkiv kan ligeledes tilgås artikler og artikler kan slettes. Slet    funktionen bliver synlig når der swipes til venstre [se illustration](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/swipe-illustration.png "swipe illustration") på en arkiveret nyhed.<br><br>

6. **Deploy on Netlify**<br>
   Din webapplikation skal udgives på Netlify.



## Nice to have opgaver
Husk at 'nice-to-have' opgaverne **ikke** er valgfrie opgaver! Jeg forventer at du begynder at udvikle nedenstående fetures, når du er færdig med de oblikatoriske opgaver. Husk også at jo flere features du har med i projektet, jo federe er det at vise frem i sit portfolio.

1. Tilføj Swipe-down to refresh på nyhedsliste:
    [se illustraion](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/pull-to-refresh-823x1024.png "swipe-down")
2. Feature tutorial første gang webapplikationen bruges: [se illustration](https://github.com/rts-cmk-opgaver/praktik-projekt-newsbox/blob/master/assets/tutorial.png "tutorial")
3. Gør det muligt at redigere rækkefølgen på kategorier i settings. Rækkefølgen skal have indflydelse på den rækkefølge kategorierne listes i nyhedslisten.

## Evaluering
Dit projekt vil blive testet på en telefon (Pixel 7 Pro), så det er vigtigt at du også tester på din telefon, og ikke udelukkende tester i browserens emulator.

### **Projektdokumentation**
I filen der hedder projektdokumentation.md skal du dokumentere dit projekt og de værktøjer du bruger, samt din proces.


Rigtig god arbejdslyst
