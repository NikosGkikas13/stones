import gr from "../img/greece.png";
import creative from "../img/creative-service.png";
import price from "../img/price-service.png";
import variety from "../img/variety-service.png";
import trust from "../img/trust-service.png";
import proffesionalism from "../img/proffesionalism-service.png";
import experience from "../img/service-experience.png";
import creativeHover from "../img/creative-service-hover.png";
import priceHover from "../img/price-service-hover.png";
import varietyHover from "../img/variety-service-hover.png";
import trustHover from "../img/trust-service-hover.png";
import proffesionalismHover from "../img/proffesionalism-service-hover.png";
import experienceHover from "../img/service-experience-hover.png";
export const grData = {
  img: gr,
  nav: ["Αρχική", "Υπηρεσίες", "Έργα", "Επικοινωνία"],
  firstPanel: {
    title: "ΟΝΟΜΑ ΣΕΛΙΔΑΣ",
    paragraph: "Δημιουργικές και ποιοτικές κατασκευές από πέτρα",
    contact: "Επικοινωνήστε μαζί μας",
  },
  services: [
    {
      icon: experience,
      title: "Πολυετή Εμπειρία",
      text: "Πάρα πολλά χρόνια σου λέω",
      iconHover: experienceHover,
    },
    {
      icon: trust,
      title: "Αξιοπιστία",
      text: "Αναλαμβάνουμε υπεύθυνα από την αρχή ως το τέλος",
      iconHover: trustHover,
    },
    {
      icon: creative,
      title: "Δημιουργικότητα",
      text: "Στόχος μας είναι η παροχή δημιουργικών, ποιοτικών και οικονομικών κατασκευών από πέτρα.",
      iconHover: creativeHover,
    },
    {
      icon: proffesionalism,
      title: "ΕΠΑΓΓΕΛΜΑΤΙΣΜΟΣ",
      text: "Με συνέπεια και επαγγελματισμό, αναλαμβάνουμε έργα μικρής και μεγάλης κλίμακας",
      iconHover: proffesionalismHover,
    },
    {
      icon: variety,
      title: "ΠΟΙΚΙΛΙΑ",
      text: "Παρέχουμε ολοκληρωμένα πακέτα που βασίζονται στις απαιτήσεις και τις δικές σας ανάγκες.",
      iconHover: varietyHover,
    },
    {
      icon: price,
      title: "ΠΡΟΣΙΤΕΣ ΤΙΜΕΣ",
      text: "Επικοινωνήστε μαζί μας, για να συντάξουμε μια δωρεάν και αναλυτική κοστολόγηση για το έργο σας.",
      iconHover: priceHover,
    },
  ],
  slider: {
    categories: [
      {
        name: "Κατηγορία 1",
        img: [variety, trust, price],
      },
      {
        name: "Κατηγορία 2",
        img: [proffesionalismHover, creativeHover],
      },
      {
        name: "Κατηγορία 3",
        img: [proffesionalism, creative],
      },
      {
        name: "Κατηγορία 4",
        img: [varietyHover, priceHover, trustHover],
      },
    ],
  },
  contact: {
    name: "Όνομα",
    number: "Τηλέφωνο",
    email: "e-mail",
    message: "Μήνυμα",
    send: "Send",
  },
  footer: {
    contact: ["Επικοινωνία", "email@gmail.com", 69854544854],
    copyrights: ["2022 Copyright © Όνομα Σελίδας.All rights reserved"],
  },
};
