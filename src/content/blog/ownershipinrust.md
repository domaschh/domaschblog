---
title: "Eigentum in Rust"
description: 'Was hat es eigentlich mit ownership auf sich?'
pubDate: 'Feb 02 2022'
heroImage: '/IMG_0419.jpg'
tag: 'Rust, Ownership'
---

## Eine verwirrende G'schicht
Eine der ersten Sachen die man lernt wenn man anfaengt in Rust zu programmieren ist die Ownership rule.
Jeder Wert kann zu jeder Zeit maximal einen Besitzer haben. Fuer viele die von anderen
Sprachen kommen wird das Anfangs sehr verwirrend sein, da das Hantieren mit Variablen einige Nuancen mit sich bringt.

```javascript
let a = "Serwus wie geht's"
let b = a;
let c = a;
```
Beispiele wie dieses sind glaub ich jeder Mann bekannt, jedoch wuerde dies in Rust nicht funktionieren.

```rust
let a = String::from("Serwus wie geht's")
let b = a;
let c = a;


error[E0382]: use of moved value: `a`
 --> src/main.rs:6:13
  |
4 |     let a = String::from("Serwus wie geht's");
  |         - move occurs because `a` has type `String`, which does not implement the `Copy` trait
5 |     let b = a;
  |             - value moved here
6 |     let c = a;
  |             ^ value used here after move
  |
```

Hier kommen die Copy und Clone Traits in's Spiel. Typen die den Copy Trait nicht implementieren
wechseln den Besitzer sobald sie verschoben werden. Das inkludiert natuerlich auch Methodenaufrufe.

> Sobald der Wert also aus einer Variable "gerissen wird", ist diese nicht mehr valide und kann somit nicht mehr benutzt werden.
## Was nun? 

Nicht alle Hoffnung ist verloren, denn Gott sei Dank gibt es das Konzept des **borrowings**.
Will man eine Variable rein lesend benutzen kann man einfach eine Referenz auf diese Vergeben. Braucht
man jedoch Schreibzugriff benoetigt man eine **mutable/unique** Referenz. Da man mit diesen den Wert veraendern kann ist 
es eben nur erlaubt maximal eine mutable Referenzin einem Scope zu haben. Denkt man analog
dazu an herkoemmliches Borgen wird schnell klar warum das der Fall ist.
Wer wuerde schon gern ein Auto geborgt bekommen, welches 5min spaeter vom Besitzer
die Reifen abgeschraubt bekommt.

```rust
fn use_value_reading(a: &str) {
    //a kann hier nicht veraendert werden, da nur eine lesende Referenz vorhanden ist
    println!("Lesend auf {}", a);
}

let a = String::from("Hallo wie geht's");
use_value_reading(&a);
//a kann hier noch immer veraendert werden
let b = a;
//hier nicht mehr
```


