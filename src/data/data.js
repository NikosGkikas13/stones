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
import petres1 from "../img/silderImages/petres1.jpg";
import petres2 from "../img/silderImages/petres2.jpg";
import petres3 from "../img/silderImages/petres3.jpg";
import petres4 from "../img/silderImages/petres4.jpg";
import petres5 from "../img/silderImages/petres5.jpg";
import petres6 from "../img/silderImages/petres6.jpg";
import petres7 from "../img/silderImages/petres7.jpg";
import petres8 from "../img/silderImages/petres8.jpg";
import petres9 from "../img/silderImages/petres9.jpg";
import petres10 from "../img/silderImages/petres10.jpg";
import petres11 from "../img/silderImages/petres11.jpg";
import petres12 from "../img/silderImages/petres12.jpg";

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
    categoriesAll: {
      img: [
        petres1,
        petres4,
        petres5,
        petres8,
        petres9,
        petres2,
        petres6,
        petres7,
        petres11,
        petres12,
      ],
    },
    categories: [
      {
        name: "Κατηγορία 1",
        img: [petres1, petres4, petres5, petres8, petres9],
      },
      {
        name: "Κατηγορία 2",
        img: [petres2, petres6, petres7],
      },
      {
        name: "Κατηγορία 3",
        img: [petres11, petres12],
      },
      // {
      //   name: "Κατηγορία 4",
      //   img: [petres10, petres11, petres12],
      // },
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
