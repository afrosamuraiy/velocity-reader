/* mdtAPE.reader — Deutsches Inhaltspaket. Wird vor app.js geladen. */
window.VELO_CONTENT = {
  lang: 'de',

  sample: `Der Geist liest nicht so, wie ein Scanner eine Seite liest. Deine Augen springen in kleinen Sprüngen vorwärts, halten für den Bruchteil einer Sekunde inne, um ein Bündel von Buchstaben aufzunehmen, und springen dann weiter. In diesen kurzen Pausen vollbringt das Gehirn eine erstaunliche Leistung: Es erkennt ein Wort, ruft seine Bedeutung ab und fügt es in den Satz ein, der im Arbeitsgedächtnis entsteht. Die meiste Zeit beim Lesen wird gar nicht für Augenbewegungen aufgewendet. Sie wird hier verbracht, im Erkennen und Verstehen. Deshalb bricht das Versprechen, Tausende Wörter pro Minute zu lesen, bei näherer Betrachtung zusammen. Du kannst deine Augen schneller bewegen, aber du kannst die tiefere Maschinerie des Verstehens nicht zwingen, unbegrenzt Schritt zu halten. Was du tun kannst, ist mit weniger Reibung zu lesen: dich so zu führen, dass deine Augen nicht zurückdriften, Wortgruppen statt einzelner Wörter aufzunehmen und die Spanne zu weiten, die du mit jedem Blick erfasst. Tu das beständig, und ein angenehmer, dauerhafter Geschwindigkeitsgewinn folgt.`,

  passages: [
    {
      id: 'octopus',
      title: 'Der Geist des Oktopus (~280 Wörter)',
      text: `Ein Oktopus ist nach fast jedem Maßstab eine fremdartige Intelligenz, die zufällig unseren Planeten teilt. Er hat drei Herzen, blaues Blut auf Kupferbasis und ein Gehirn, das sich um seine Speiseröhre legt. Noch seltsamer: Die meisten seiner Nervenzellen sitzen gar nicht in diesem zentralen Gehirn, sondern verteilen sich über seine acht Arme. Jeder Arm kann schmecken, tasten und mit erstaunlicher Eigenständigkeit Entscheidungen treffen. Trennt man die Nervenverbindung zum zentralen Gehirn, greift ein isolierter Arm noch immer nach Nahrung und weicht Gefahr aus. In einem echten Sinne denkt ein Oktopus mit seinem ganzen Körper.

Dieses dezentrale Design verleiht dem Tier bemerkenswerte Fähigkeiten zum Lösen von Problemen. Oktopusse haben im Labor gelernt, kindersichere Tablettendosen zu öffnen, Labyrinthe zu durchqueren und einzelne menschliche Pfleger zu erkennen – manchmal spritzen sie Wasserstrahlen auf jene, die sie nicht mögen. In freier Wildbahn tragen sie Kokosnussschalen über den Meeresboden, um später tragbare Unterschlüpfe zusammenzusetzen, ein Verhalten, das der technischen Definition von Werkzeuggebrauch entspricht. Sie können Farbe und Struktur ihrer Haut im Bruchteil einer Sekunde ändern, nicht nur zum Verstecken, sondern offenbar auch, um Erregung auszudrücken.

Doch bei all dieser Brillanz führt der Oktopus ein erstaunlich kurzes und einzelgängerisches Leben. Die meisten Arten überleben nur ein bis zwei Jahre. Weibchen sterben meist kurz nachdem ihre Eier geschlüpft sind, weil sie zu fressen aufgehört haben, um das Gelege zu bewachen. Da sich Eltern und Nachkommen nie überschneiden, können Oktopusse kein Wissen über Generationen weitergeben. Jeder muss die Welt vollständig auf eigene Faust neu entdecken, brillant und kurz, erfindet er Intelligenz von Grund auf neu und nimmt sie mit ins Grab.`,
      quiz: [
        { q: 'Wo sitzen die meisten Nervenzellen eines Oktopus?', opts: ['In seinem zentralen Gehirn', 'Verteilt über seine acht Arme', 'In seinen drei Herzen', 'In seiner Haut'], a: 1 },
        { q: 'Was verleiht dem Oktopusblut seine blaue Farbe?', opts: ['Eisen', 'Kupfer', 'Sauerstoffbläschen', 'Pigmentzellen'], a: 1 },
        { q: 'Warum können Oktopusse kein Wissen an ihre Nachkommen weitergeben?', opts: ['Sie haben ein schlechtes Gedächtnis', 'Eltern und Nachkommen überschneiden sich nie im Leben', 'Sie können nicht kommunizieren', 'Ihre Jungen sind blind geboren'], a: 1 },
        { q: 'Das Kokosnussschalen-Verhalten ist bemerkenswert, weil es gilt als:', opts: ['Tarnung', 'Wanderung', 'Werkzeuggebrauch', 'Jagd'], a: 2 }
      ]
    },
    {
      id: 'clock',
      title: 'Wie wir die Zeit erfunden haben (~300 Wörter)',
      text: `Die meiste Zeit der Menschheitsgeschichte war Zeit etwas Lokales und Ungefähres. Eine Stadt richtete sich nach der Sonne: Mittag war der Moment, in dem die Sonne am höchsten über genau diesem Ort stand. Zwei Städte hundert Meilen voneinander entfernt hatten tatsächlich verschiedene Mittage, und niemanden störte es, weil niemand schnell genug reisen konnte, als dass der Unterschied eine Rolle gespielt hätte. Die Taschenuhr eines Reisenden ging irgendwo immer ein wenig falsch, und das war einfach die Natur der Welt.

Die Eisenbahn zerstörte diese bequeme Unschärfe. Züge fuhren schnell genug, um lokale Zeit gefährlich zu machen. Stellte jeder Bahnhof seine Uhr nach der eigenen Sonne, wurde ein Fahrplan zu einem Netz winziger Widersprüche, und zwei Züge mit leicht unterschiedlichen Zeiten konnten sich auf demselben Gleis wiederfinden. Die Eisenbahngesellschaften reagierten, indem sie eine einzige Standardzeit über ihr ganzes Netz verhängten, unabhängig von der Sonne darüber. In Großbritannien hieß das schlicht Eisenbahnzeit, und zunächst wehrten sich viele Städte dagegen, ihren lokalen Mittag einer Uhr in einer fernen Hauptstadt zu überlassen.

Die Logik erwies sich als unaufhaltsam. 1884 trafen sich Delegierte in Washington und teilten den Planeten in vierundzwanzig Zeitzonen, jede eine Stunde breit, verankert an einer Linie durch Greenwich in England. Zeit war zu einer Vereinbarung geworden statt zu einer Beobachtung. Nicht mehr die Sonne nannte dir die Stunde, sondern ein Ausschuss. Wir bemerken selten, wie radikal das war. Wenn du auf dein Handy blickst und dieselbe Minute liest wie jemand vierhundert Meilen entfernt, vertraust du einem unsichtbaren internationalen Abkommen mehr als dem Zeugnis des Himmels. Die Uhr siegte, und die Sonne wurde, nachdem sie die Zeitmessung die ganze Geschichte hindurch beherrscht hatte, still in den Ruhestand geschickt.`,
      quiz: [
        { q: 'Wie stellte eine Stadt vor der Standardzeit üblicherweise ihre Uhren?', opts: ['Nach der nächsten Eisenbahn', 'Nach dem Stand der Sonne über ihr', 'Nach einem nationalen Funksignal', 'Nach der Uhr der Hauptstadt'], a: 1 },
        { q: 'Was erzwang die Einführung der standardisierten Zeit?', opts: ['Der Telegraf', 'Die Eisenbahnen', 'Segelschiffe', 'Der Buchdruck'], a: 1 },
        { q: 'Was geschah beim Treffen 1884 in Washington?', opts: ['Uhren wurden erstmals erfunden', 'Der Planet wurde in 24 Zeitzonen geteilt', 'Greenwich wurde gegründet', 'Züge wurden verboten'], a: 1 },
        { q: 'Der Text argumentiert, dass moderne Zeit im Kern ist:', opts: ['Eine wissenschaftliche Messung der Sonne', 'Eine internationale Vereinbarung', 'Eine religiöse Tradition', 'Eine Naturkonstante'], a: 1 }
      ]
    },
    {
      id: 'forest',
      title: 'Das verborgene Netzwerk der Wälder (~260 Wörter)',
      text: `Geh durch einen alten Wald, und er sieht aus wie eine Menge Einzelner: getrennte Bäume, die um Licht konkurrieren, jeder in seinem eigenen Stück Boden verwurzelt. Unter deinen Füßen ist die Wahrheit weit seltsamer. Die Wurzeln dieser Bäume sind von einem riesigen Geflecht aus Pilzfäden durchzogen, feiner als Haar und in ihrer Reichweite fast endlos. Durch dieses Netzwerk, das mykorrhizische Netz genannt wird, tun Bäume etwas, das bemerkenswert nach Zusammenarbeit aussieht.

Ein hoher, sonnenüberfluteter Baum kann Zucker hinab in das Pilznetz pumpen, von wo er zu einem Sämling reist, der im Schatten kämpft. Ältere Bäume, manchmal Mutterbäume genannt, sind besonders großzügig und schicken Kohlenstoff und Nährstoffe an jüngere Nachbarn, einschließlich ihrer eigenen Nachkommen, die sie offenbar erkennen können. Stirbt ein Baum, kann er seine verbleibenden Ressourcen in das Netz abgeben, ein letztes Geschenk an die Gemeinschaft, die ihn überlebt.

Die Pilze sind keine Wohltäter. Im Tausch gegen den Zucker, den die Bäume durch Fotosynthese erzeugen, liefern die Pilze Wasser und schwer erreichbare Mineralien wie Phosphor und erweitern damit die Reichweite jeder Wurzel, die sie berühren, dramatisch. Es ist ein Handel, uralt und gewaltig, der lautlos unter jedem Waldboden abläuft. Manche Wissenschaftler warnen davor, ihn als Freundschaft zu romantisieren, denn im Kronendach darüber herrscht weiterhin Konkurrenz. Doch kaum jemand bestreitet noch die zentrale Entdeckung: Ein Wald ist keine Ansammlung einsamer Einzelner. Er ist ein einziges, verbundenes, atmendes System, und die wichtigsten Gespräche, die er führt, finden vollständig im Dunkeln statt.`,
      quiz: [
        { q: 'Woraus besteht das mykorrhizische Netz?', opts: ['Nur aus Baumwurzeln', 'Aus Pilzfäden, die Baumwurzeln verbinden', 'Aus unterirdischen Bächen', 'Aus Insektentunneln'], a: 1 },
        { q: 'Was geben die Bäume den Pilzen im Tausch?', opts: ['Wasser', 'Phosphor', 'Zucker aus der Fotosynthese', 'Sauerstoff'], a: 2 },
        { q: 'Wofür sind „Mutterbäume“ bemerkenswert?', opts: ['Sie sind die höchsten', 'Sie schicken Nährstoffe an jüngere Bäume', 'Sie produzieren die meisten Samen', 'Sie widerstehen Krankheiten'], a: 1 },
        { q: 'Die Kernaussage des Textes ist, dass ein Wald ist:', opts: ['Eine Gruppe konkurrierender Einzelner', 'Ein verbundenes, kooperatives System', 'Größtenteils Pilz', 'Nicht fähig, Dürren zu überleben'], a: 1 }
      ]
    }
  ],

  ui: {
    ready: 'Bereit',
    finished: 'Fertig.',
    play: '▶ Abspielen', pause: '⏸ Pause', restart: '↺ Neustart',
    start: '▶ Start', stop: '⏸ Stopp', done: '✓ Fertig',
    resultEyebrow: 'Deine Lesegeschwindigkeit',
    wpmUnit: 'Wörter pro Minute',
    comprehension: 'Verständnis',
    correct: 'Richtig',
    effective: 'Effektive WpM*',
    effectiveNote: '*Effektive WpM = Geschwindigkeit × Verständnis. Belohnt Verstehen, nicht bloß Tempo.',
    warnLow: '<b>Verständnis unter 70 %.</b> Deine Rohgeschwindigkeit zählt nur eingeschränkt – du hast vielleicht zu schnell gelesen, um den Text aufzunehmen. Lies näher an deinem echten Tempo und halte diesen Wert hoch, <em>bevor</em> du WpM jagst.',
    warnOk: 'Das Verständnis blieb über 70 % – diese Geschwindigkeit ist echt. Trainiere jetzt die Hebel in den anderen Tabs und teste erneut, um sie zu steigern, während das Verständnis hier bleibt.',
    takeAnother: '↺ Noch einen Test machen',
    speed: [
      [200, 'Unter dem Durchschnitt – viel Luft nach oben.'],
      [260, 'Etwa im Erwachsenen-Durchschnitt (~238 WpM).'],
      [350, 'Überdurchschnittlich. Solide(r) Leser(in).'],
      [450, 'Schnell – nahe der praktischen Grenze für volles Verständnis.'],
      [Infinity, 'Sehr schnell – achte darauf, dass das Verständnis hält und nicht ins Überfliegen kippt.']
    ],
    schulteDone: 'fertig!',
    clearConfirm: 'Alle gespeicherten Tests und Ergebnisse auf diesem Gerät löschen?'
  },

  heroLoop: 'mdtAPE.reader bringt dir bei, schneller zu lesen, ohne heimlich an Verständnis zu verlieren. Sieh, wie ein Wort nach dem anderen deine Augen ruhig hält.'
};
