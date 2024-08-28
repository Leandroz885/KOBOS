# Programmeren 1

## Les 1

---

## Overzicht

- Over mij
- Over dit vak
- Wat is programmeren?
- Eerste programma
- Expressies
- Datatypes
- Introductie tot modules

---

## Over mijzelf

- ir. Thomas Vranken
- Computerwetenschappen aan de KU Leuven
- Educatieve master Wetenschappen en Technologie aan de KU Leuven
- Software engineer bij Twipe Mobile Solutions
- Lesgever bij CodeFever
<div class="flex justify-around h-28">
  <img class="bg-red-700 p-4" src="https://www.codefever.be/src/Frontend/Themes/Custom/src/Layout/Images/logo.svg">
  <img class="" src="https://www.twipemobile.com/wp-content/uploads/2022/05/cropped-Twipe-Final-Logo-2022.png">
</div>

---

## Doelstellingen van dit vak

[ECTS-fiche](https://onderwijsaanbod.leuven.ucll.be/2022/syllabi/n/MSC15AN.htm#activetab=doelstellingen_idp2851600)

#### De student verwerft de basiskennis voor programmeren:

- Programma's kunnen schrijven in meerdere programmeertalen
- Een aantal belangrijke programmeerconcepten kunnen uitleggen en toepassen
- Programmeerconcepten kunnen combineren om nieuwe problemen op te lossen
- Computationeel denken kunnen uitleggen aan de hand van voorbeelden

#### De student leert een aantal principes voor vakdidactisch handelen:

- Correcte terminologie en taalgebruik kunnen benutten
- Abstracte concepten en denkprocessen kunnen verbinden met voorwerpen uit de realiteit

---

## Leerstof

- Slides zijn voornaamste leerstof
- Handboek: _De Programmeursleerling: Leren coderen met Python 3_ van Pieter Spronck
  - Link op Toledo > Cursusdocumenten
  - Niet alles wordt behandeld
  - Vooral nuttig als referentiewerk + extra oefeningen
- Oefeningen op Dodona

**Zelf (online) kunnen zoeken naar informatie, is cruciaal voor een programmeur**

- Je zal oefeningen moeten (her)maken in Kotlin, een taal die niet expliciet wordt behandeld tijdens de les
- Je zal kleinere opdrachten krijgen om andere talen zelf te analyseren

---

## Evaluatie

- Opdrachten indienen tijdens het jaar
  - Worden meegedeeld tijdens de les + via Toledo
  - Indienen via Dodona
  - Meer info op Toledo > Opdrachten
- Project maken
  - Individueel
  - Mondelinge verdediging tijdens examenperiode
  - Opdracht komt online tijdens/na de paasvakantie

Er is **geen** theoretisch examen tijdens de examenperiode.

---

## Praktisch

- 9-tal lessen van 3u op woensdagnamiddag
- On-campus (tenzij anders meegedeeld)
- Doel is om merendeel van theorie **voor** de paasvakantie te zien
  - Ruimte om nadien aan project te werken en vragen te stellen

---

## Software en programmeeromgevingen

- Jullie gaan met verschillende programmeeromgevingen in contact komen
- Doel is om ermee kennis te maken, niet om diepgaan mee vertrouwd te geraken
- Deze les: [https://replit.com/](https://replit.com/)
  - Normaal al account gemaakt
  - Indien niet: nog kans deze les

---

## Tips om te studeren

Oefening baart kunst:

- Programmeren leer je **niet** door alleen maar code te lezen, maar door ze zelf te schrijven
- Belangrijkste is om de concepten en het denkproces onder de knie te krijgen
  - Afkijken van oplossingen heeft weinig zin
- Veel oefeningen (her)maken is nuttig

Je moet geen grote hoeveelheden theorie instuderen, maar je moet wel vlot code kunnen schrijven. Een aantal concepten leer je daarom best vanbuiten.

---

## Wat is programmeren?

---

## Voorbeelden van programmeertalen(?)

Welke van onderstaande talen zijn geen programmeertalen?

_Niet-programmeertalen lichten rood op wanneer je jouw muis er over houdt_

<div class="grid grid-cols-3 place-items-center">
  <div class="text-center">
    <img class="h-24" src="https://scratch.mit.edu/images/logo_sm.png">
    Scratch
  </div>
  <div class="text-center">
    <img class="h-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png">
    JavaScript
  </div>
  <div class="text-center">
    <img class="h-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png">
    Python
  </div>
  <div class="text-center">
    <img class="h-24" src="https://www.devopsschool.com/blog/wp-content/uploads/2022/03/java_logo_icon_168609.png">
    Java
  </div>
  <div class="text-center">
    <img class="h-24 hover:bg-red-700" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/1200px-Markdown-mark.svg.png">
    Markdown
  </div>
  <div class="text-center">
    <img class="h-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/1200px-Rust_programming_language_black_logo.svg.png">
    Rust
  </div>
  <div class="text-center">
    <img class="h-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png">
    C++
  </div>
  <div class="text-center">
    <img class="h-24 hover:bg-red-700" src="/html_logo.png">
    HTML
    </div>
  <div class="text-center">
    <img class="h-24" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png">
    Kotlin
  </div>

</div>

---

## Programmeertalen

**Programmeren** = instructies geven aan een computer om een probleem op te lossen

- _Probleem_ is hier een zeer ruim begrip

**Programmeertaal** = een set van regels waarmee we met de computer kunnen communiceren om deze problemen op te lossen

- Is meestal een middel, geen doel
- In theorie kan een probleem opgelost worden met eender welke programmeertaal
- Een aantal concepten bestaan in bijna alle programmeertalen → onderwerpen van dit vak

HTML en Markdown zijn nuttige en veelgebruikte talen, maar ze ondersteunen niet al deze concepten.

---

## Eerste programma: Hello world

<pre class=""><code data-noescape type="text/template">print("Hello world")
</code></pre>

---

<pre class=""><code data-noescape type="text/template">print("Hello world")
</code></pre>

- `print()` is een **functie** in Python die iets toont in de uitvoer (de console)
- Hetgene tussen de haakjes noemt men een **parameter**
- `"Hello world"` noemt men een `string`: een stuk tekst (te herkennen aan de aanhalingstekens)
- Computers geven geen interpretatie aan een `string`. Het is betekenisloos, in tegenstelling tot `print()`

---

### Opdracht: Hello World

- Log in op [https://replit.com/](https://replit.com/) en maak een project voor Python
- Schrijf een lijn code in de Python **Console** (rechterkant van het project) om je eigen naam als `string` te printen en voer uit
- Verwijder de aanhalingstekens rond je naam en voer de code opnieuw uit. Wat gebeurt er? Waarom?

---

### Console en programma's

- De console is een interactieve omgeving, bedoelt voor korte testen en code van 1 lijn uit te voeren
  - Je 'praat' rechtstreeks met de computer
- Alles in de console ben je kwijt als de console wordt gesloten (bv. door het project te verlaten)

- Een programma is een reeks instructies die de computer uitvoert
- Een programma kan meerdere lijnen code bevatten. Elke lijn stelt een nieuwe instructie voor(\*)
- Een programma kan je opslaan en later opnieuw uitvoeren (eventueel op een andere computer)

(\*) dit is wat kort door de bocht, de details komen in volgende lessen aan bod

---

### Opdracht: Recept

Schrijf een **programma** dat een recept naar keuze uitprint:

- Er moeten minstens 3 en maximaal 6 stappen zijn
- Schrijf voor elke stap een aparte `print()` op een nieuwe lijn
- Nummer elke stap door een cijfer in het begin van de instructie te zetten

Als je programma werkt en de correcte uitvoer toont, wissel dan twee lijnen code van plaats. Voer de code opnieuw uit en bekijk de uitvoer. Wat besluit je hieruit?

---

### Volgorde van uitvoeren

De basisregel is:

- De computer start op lijn 1 van het programma
- De computer voert lijn per lijn uit van boven naar beneden

Dit is slechts een basisregel. Er bestaan verschillende uitzonderingen op!

---

## Expressies

<pre class="">
<code data-noescape type="text/template">> (2 + 7) * 4
36

> "Welkom aan de" + "UCLL!"
Welkom aan deUCLL!
</code></pre>

---

### Expressies: basis

- Een **expressie** kan je **evalueren**. De computer leest de aparte stukken en combineert ze volgens welbepaalde regels
- De meeste expressies zijn wiskundig, maar andere expressies zijn ook mogelijk
- Het resultaat van een expressie kan je snel te weten komen door de expressie te evalueren in de **console**

Bekijk de tweede expressie op de vorige slide opnieuw. Wat valt je op? Hoe kan je dit oplossen?

---

### Expressies: wiskunde

De volgende bewerkingen zijn universeel over (bijna) alle programmeertalen:

- Optellen `+`
- Aftrekken `-`
- Vermenigvuldigen `*`
- Delen `/`
- Modulo (rest na deling) `%`

Programmeertalen volgen de volgorde van bewerkingen:

- Bijvoorbeeld: `*` en `/` hebben voorrang op `+` en `-`
- Gebruik extra haakjes `(` en `)` indien nodig

Andere bewerkingen (machten, wortels, logaritmes, ...) variëren tussen programmeertalen.

---

### Expressies: tekst

Je kan twee of meerdere `string`s samenvoegen door middel van `+`. Dit is redelijk universeel voor programmeertalen, op een paar randgevallen na.

Men noemt dit ook wel **concateneren** (_Eng: concatenate_), vaak afgekort tot _concat_.

Wees expliciet:

- Computers plaatsen normaal **geen** spaties of witregels, de programmeur moet dit toevoegen
- Spaties zijn eenvoudig: plaats het binnen een `string`, of concat `" "` met een andere `string`
  - Bijvoorbeeld: `"Hello " + "World"` of `"Hello" + " " + "World"`
- Witregels komen later aan bod

---

## Variabelen

<pre class="">
<code data-noescape type="text/template">vak = "Programmeren I"
print(vak)
</code></pre>

---

### Variabelen: basis

Een **variabele** dient voor het opslaan van expressies en andere data.

- Een variabele heeft steeds een **naam** en een **waarde**
- **declareren**: het aanmaken van een nieuwe variabelen
- **toekennen**: een variabele een (nieuwe) waarde geven

Een variabele in Python declareer je als volgt:

<pre class="">
<code data-noescape type="text/template">&lt;naam_variabele&gt; = &lt;waarde_variabele&gt;
</code></pre>

---

### Variabelen: mentaal model

Vaak wordt een variabele vergeleken met een container:

- De waarde is de inhoud van de container
- De naam is een label waarmee we de container kunnen terugvinden
- Declareren = een nieuwe container maken
- Een waarde toekennen = de container vullen

**Let op:** een variabele in programmeren is iets helemaal anders dan een variabele in wiskunde!

---

### Variabelen: goede gewoontes

Vergelijk de twee stukken code hieronder. Welke is het eenvoudigst om te begrijpen?

<pre class="">
<code data-noescape type="text/template">x = 20
y = "An"
z = "V"
</code></pre>

<pre class="">
<code data-noescape type="text/template">leeftijd = 20
voornaam = "An"
geslacht = "V"
</code></pre>

**Conclusie**: geef altijd een goede naam aan een variabele die beschrijft wat ze voorstelt.

---

### Variabelen: goede gewoontes

Verschillende programmeertalen hebben andere gewoontes voor de namen van variabelen.

In Python gebruikt men **snake_case**:

- Gebruik enkel kleine letters
- Vervang spaties door een laagliggend streepje (`_`)

Voorbeelden: `gemiddelde_score`, `een_zeer_lange_variabelenaam`, `ucll_aantal_lln`

Een populair alternatief in talen zoals Java is **camelCase**:

- Start met een kleine letter, tenzij het een afkorting is in hoofdletters
- Vervang spaties door de volgende letter als een hoofdletter te schrijven

Voorbeelden: `gemiddeldeScore`, `eenZeerLangeVariabelenaam`, `UCLLAantalLln`

---

Maakt het uit welke je notatie je gebruikt?

- Meestal niet
- Sommige talen dwingen het wel af of suggereren om de naam aan te passen
- Het belangrijkste is dat je **consistent** bent

---

### Variabelen en expressies

Een variabele kan het resultaat van een expressie bevatten, of zelfs een andere variabele.

Bijvoorbeeld:

<pre class="">
<code data-noescape type="text/template">straal = 5
oppervlakte = straal * straal * 3.14
print(oppervlakte)

gebruiker = "Bart"
boodschap_2 = "Welkom " + gebruiker
print(boodschap_2)
</code></pre>

Wat gebeurt er precies?

1. De computer evalueert eerste de expressie aan de rechterkant van `=`
2. Het resultaat wordt gekopieerd naar de variabele aan de linkerkant van `=`

---

### De waarde van een variabele veranderen

Je kan bestaande variabelen een nieuwe waarde geven. In Python gebeurt dit op dezelfde manier als het declareren van een nieuwe variabele:

<pre class="">
<code data-noescape type="text/template">dag = "maandag" # Dit is een declaratie van een nieuwe variabele
# ...
dag = "dinsdag" # Hier krijgt een bestaande variabele een nieuwe waarde
</code></pre>

**Opgelet:** In Python kan je niet aan de code zien of een variabele nieuw is of al bestaat. Dit kan een nadeel zijn bij het lezen van complexere programma's.

Andere talen hebben regels om het verschil duidelijk te maken. Bijvoorbeeld in JavaScript:

<pre class="">
<code data-noescape type="text/template">let dag = "maandag" # dit is een declaratie
# ...
dag = "dinsdag" # dit is geen declaratie, de variabele moet al bestaan
</code></pre>

---

Bekijk de code hieronder. Wat zal er in de console verschijnen?

<pre class="">
<code data-noescape type="text/template">t = 5
y = t + 3
t = 6
print(t)
print(y)
</code></pre>

---

#### Aanpasbaarheid

Variabelen kunnen aanpasbaar (_Eng: mutable_) of onaanpasbaar (_Eng: immutable_) zijn.

In Python zijn alle variabelen steeds aanpasbaar. Andere talen hebben strictere regels.

#### Constanten

Sommige variabelen stellen een constante waarde voor in het hele programma. Voorbeelden: het getal π, het aantal levens in het begin van een spel, het aantal dagen in een week, ...

Constanten zijn logischerwijs onaanpasbaar. Om dit aan te geven, wordt hun naam vaak geschreven in **UPPER_SNAKE_CASE**.

Bijvoorbeeld: `DAYS_IN_WEEK = 7`

Dit is een afspraak tussen mensen, het is geen verplichting. Computers houden hier geen rekening mee.

---

### Variabelen: opdracht

Schrijf het volgende programma:

- Declareer een variabele die je geboortejaar voorstelt
- Declareer een constante die de leeftijd voorstelt waarop iemand als meerderjarig wordt beschouwd (18 jaar)
- Declareer een nieuwe variabele die het jaar voorstelt waarop je meerderjarig wordt/bent geworden
- Print het jaar van meerderjarigheid in de console
- Pas nadien het geboortejaar aan naar keuze. Controleer of je code blijft werken zonder verdere aanpassingen

---

## Datatypes

<pre class="">
<code data-noescape type="text/template">naam = "Chiara"
leeftijd = 53
boodschap = "Naam: " + naam + ", leeftijd: " + leeftijd

TypeError: can only concatenate str (not "int") to str
</code></pre>

---

### Datatypes: basis

Elke variabele en expressie heeft een bepaald **type** afhankelijk van het soort data

De meest voorkomende types zijn:

- Tekst: `string`
- Gehele getallen: `int`, afgeleid van _Integer_
- Kommagetallen: `float`, afgeleid van _Floating point numbers_
- Booleaanse waarden: `bool`, zie volgende les

De namen hierboven kunnen variëren tussen programmeertalen.

---

### Datatypes: nut

Types hebben verschillende toepassingen:

- Afleiden welke operaties wel/niet mogelijk zijn
  - Bijvoorbeeld: een `+` heeft een andere functie bij tekst dan bij cijfers
- Programmeurs waarschuwen voor fouten (bugs)
  - Bijvoorbeeld: de `TypeError` in het voorbeeld waarschuwt voor het mengen van cijfers en tekst

Vuistregel: je mag niet zomaar een type vervangen door een ander type ('geen appelen met peren vergelijken')

---

### Datatypes: type opvragen

In Python kan je het type van een variabele of het resultaat van een expressie opvragen met de functie `type()`:

<pre class="">
<code data-noescape type="text/template">> type(5)
&lt;class 'int'&gt;

> type(dorp_of_stad)
&lt;class 'str'&gt;

> type(7 / 2)
&lt;class 'float'&gt;
</code></pre>

---

### Datatypes: floats en afrondingsfouten

Kommagetallen (`floats`) worden voorgesteld met een punt (geen komma).

Wat denk je dat het resultaat zal zijn van onderstaand programma?

<pre class="">
<code data-noescape type="text/template">print(0.1)
print(0.1 + 0.1)
print(0.1 + 0.1 + 0.1)
</code></pre>

---

`float`s zijn een uitdaging voor computers:

- Je kan geen oneindige kommagetallen voorstellen met een eindig geheugen
- Ook eindige kommagetallen vormen een probleem. Hoe stel je een getal als `10 000.000 000 0001` voor met zo min mogelijk geheugen?
- Afrondingsfouten zijn haast onvermijdelijk

**Conclusie**: je vermijdt best kommagetallen, tenzij je niet anders kan.

De naam `float` verwijst overigens naar de interne voorstelling van kommagetallen in het geheugen van computers.

Naast `float` hebben sommige talen het type `double`. Dit is een kommagetal dat meer cijfers kan bevatten dan een `float`. Het is nuttig voor toepassingen waar precisie belangrijk is (bv. voor het simuleren van het weer)

---

### Datatypes: Hard typing vs Soft typing

Talen zoals Python en JavaScript gebruiken **soft typing**:

- Een variabele kan van type veranderen
- De programmeur hoeft de types niet te vermelden, ze zijn verborgen in het programma
- Types worden gecontroleerd tijdens het uitvoeren (_Eng: at runtime_)

Talen zoals Java en Rust gebruiken **hard typing**:

- Een variabele kan maar één type bevatten
- Programmeurs moeten het type (meestal) expliciet vermelden
- Types worden gecontroleerd vóór het uitvoeren (_Eng: at compile time_)

Voorbeeld uit Java:

<pre class="">
<code data-noescape type="text/template">int x = 5;  // OK
String naam = 7.345  // Error
</code></pre>

Hard typing is veiliger en stabieler, maar vereist meer werk en kennis van types.

---

### Datatypes: conversie

Elke taal heeft technieken om waarden te converteren naar een ander type.

In Python zijn er drie nuttige functies om te onthouden:

- `str()`
- `int()`
- `float()`

Bijvoorbeeld:

<pre class="">
<code data-noescape type="text/template">t = str(5)
print(type(t))

y = float("5.2")
z = int("Leuven")  # Wat gaat er gebeuren?
</code></pre>

Type conversie is niet zonder risico's: gebruik ze verstandig!

---

## Invoer en uitvoer

---

### Invoer en uitvoer

Programma's op zichzelf zijn niet interessant als ze niet kunnen interageren met de 'buitenwereld'.

Voorbeelden van interactie:

- Muisklik of toets indrukken
- Tekst typen
- Iets printen op het scherm
- Tekstbestanden op de computer lezen
- Het resultaat van een berekening doorsturen naar een ander proces

Dit noemt men invoer en uitvoer (_Eng: input and output_, vaak afgekort tot _I/O_)

---

### Invoer: `input()`

<pre class="">
<code data-noescape type="text/template">antwoord = input("Wat is je leeftijd? ")
antwoord_als_int = int(antwoord)
nieuwe_leeftijd = antwoord_als_int + 1
nieuwe_leeftijd_als_str = str(nieuwe_leeftijd)
boodschap = "Volgend jaar ben je " + nieuwe_leeftijd_als_str + " jaar oud."
print(boodschap)
</code></pre>

- `input(question)` toont `question` aan de gebruiker. Het antwoord van de gebruiker wordt teruggegeven
- Je moet zelf het antwoord opslaan in een variabele
- Het antwoord is altijd van type `string`. Pas conversie van types toe indien nodig

Veelgemaakte fout: een numeriek antwoord vergeten te converteren naar een `int` of `float`

Je kan type-conversies direct toepassen op het resultaat van `input()`:

<pre class="">
<code data-noescape type="text/template">antwoord = int(input("Wat is je leeftijd? "))
</code></pre>

---

### Uitvoer: `print()`

`print()` laat toe om meer dan 1 parameter te printen:

<pre class="">
<code data-noescape type="text/template">t = "abc"
u = 123
v = 5.236
print(t, u, v)
</code></pre>

- elke parameter wordt apart verwerkt
- `print()` is slim genoeg om elke parameter eerst naar een `string` te converteren indien nodig
- tussen elke parameter wordt een spatie gezet in de uitvoer

---

### Introductie tot modules

<pre class="">
<code data-noescape type="text/template">import math
resultaat = math.sqrt(225)
print(resultaat)
</code></pre>

---

### Modules: standard library

**Standard library** = de set van functies en andere structuren die een programmeertaal altijd aanbiedt. Elke taal heeft een standard library, vaak met functies zoals `print()`, `input()`, ...

Veel talen hebben een systeem van **modules** of **packages** (betekenen vaak hetzelfde). Het laat toe om code op te splitsen over meerdere bestanden en ernaar te verwijzen.

De Python standard library bevat een heel aantal modules. De meeste moet je eerst expliciet importeren met `import`. De officiële documentatie bevat een [gedetailleerde lijst](https://docs.python.org/3/library/) met meer info over de modules en hun functies.

De volgende modules worden frequent gebruikt:

- `math`: functies voor meer complexere wiskundige bewerkingen
- `random`: genereer willekeurige getallen
- `time`: functies gerelateerd aan tijd en de voorstelling ervan

**Vuistregel**: plaats `import` steeds in het begin van bestanden.

---

### Modules: Third-party libraries/modules/packages

Programmeurs kunnen onderling code met elkaar delen door middel van modules/packages. Rond een taal bestaat vaak een heel ecosysteem van publieke, gratis modules.

Moderne talen hebben gesofisticeerde systemen om dit te beheren. In oudere programmeertalen vereist dit meer moeite.

**Afspraak voor dit vak**: Third-party packages worden **niet** gebruikt voor opdrachten, noch voor het project, tenzij anders gespecifieerd.

---

## Opdrachten

---

### Opdrachten

- Ga naar Toledo > Opdrachten
- Volg de stappen om toegang te krijgen tot dit vak op Dodona
- Maak de opdrachten van module 1 in Python
- Gebruik de concepten uit deze slide en leer ze te combineren
- Je mag gebruik maken van het internet → probeer oplossingen te zoeken voor je problemen
- Vraag hulp als je vastzit

---

### Tegen volgende les

Onderzoek hoe je het volgende kan doen in andere programmeertalen:

- `print()`
- `input()`
- een vierkantswortel van een getal berekenen
- een willekeurig getal genereren

Onderzoek 3 talen: Kotlin + 2 andere programmeertalen uit de lijst (zie begin van deze presentatie). Python is niet toegelaten.

Per concept:

- geef aan wat de naam van de functie/methode/... is
- geef een voorbeeld (1-3 lijnen code) dat toont hoe je ze moet gebruiken
- geef aan op welke websites je de informatie hebt gevonden. Zoek minstens 2 sites, voeg de URLs toe aan je antwoorden

Dien je gestructureerde en beknopte antwoorden in op Toledo voor de start van volgende les. Ze worden tijdens de les klassikaal besproken.

Schatting tijdsduur: 30 min - 1u
