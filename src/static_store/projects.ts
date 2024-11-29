import Beer from "@/../public/projects/beer.jpg";
import Charge from "@/../public/projects/charge.webp";
import Twin from "@/../public/projects/twin.webp";
import Fish from "@/../public/projects/fish.webp";
import BeerTon from "@/../public/projects/beerton.jpg";
import Gradus from "@/../public/projects/gradus.jpg";
import Kovcheg from "@/../public/projects/kovcheg.png";
import { DetailsItem } from "@/types/detail_item.type";

export const projects: DetailsItem[] = [
  {
    id: "7",
    heading: "КОВЧЕГ",
    description: "projects.kovcheg",
    image: Kovcheg,
    href: "http://www.kovchegp.com.ua/",
    isBlured: true,
    meta_description:
      "Ковчег це компанія, яка займає лідируючі позиції на ринку дистрибуції продуктів харчування в Рівненській області...",
  },
  {
    id: "6",
    heading: "TwinSocks",
    description: "projects.twin",
    image: Twin,
    href: "https://twinsocks.com.ua/?fbclid=PAZXh0bgNhZW0CMTEAAaZuFnVtft8NO3BOw761Tbb6LrK0mC6HZQnampfN7EP2_1x1XUAwN-HzkLc_aem_AZ4BuQblGc3hR36We8d9tjFp8Y6uAmx7nhSWQpDgbbbPSmsHe_CmeluKiI8IcbbvWfzSKwthq5zgJEqXUDsPs7fk",
    isBlured: true,
    meta_description:
      "ТМ TwinSocks – це запатентована у 2016 році торгова марка в панчішно-шкарпетковій галузі, яка за недовгий час встигла завоювати серця багатьох українців. Ми виготовляємо не просто стильні та комфортні шкарпетки та колготки, першочергово ми дбаємо про якість нашого товару",
  },
  {
    id: "5",
    heading: "Риба Love",
    description: "projects.fish",
    image: Fish,
    href: "https://www.instagram.com/rybalove_shop/",
    isBlured: true,
    meta_description:
      "Риба Love. Пропонуємо до вашої уваги ЖИВУ рибу з власної акваферми: Сом африканський (кларієвий). Маємо власне сертифіковане виробництво копченої та соленої риби..",
    date: "",
  },
  {
    id: "4",
    heading: "The Хміль",
    description: "projects.beer",
    image: Beer,
    href: "https://www.instagram.com/khmil.kovel/",
    isBlured: true,
    meta_description:
      "The Хміль - це найбільший вибір розливного пива у м. Ковель! А саме 20 сортів пінного!!! В асортименті лінійка виробництва Carlsberg Group, а також українських крафтових виробників.",
    date: "",
  },
  {
    id: "3",
    heading: "BEERTON",
    description: "projects.beerton",
    image: BeerTon,
    href: "https://beertone.choiceqr.com/?fbclid=PAZXh0bgNhZW0CMTEAAabVOjEx6XjB9W6kPUnqwBvoU4TIsQBM5VsxCRH8c7VRxvm6nvBcLoPjN2M_aem_AZ6CHNdplxkooF5Al4j5nm5rsgyL2zwDlt1LM65jfPJPhiSqkPk-7xJzUfZGuv0IMQCuRKzx3loK4vyxQzSncRx_",
    isBlured: true,
    meta_description:
      "Beerton - це те, що ми вважаємо новим форматом закладу, де ви можете спробувати чудові страви, приготовані на нашій кухні, та придбати продукцію, яку ми представляємо у Волинській області, щоб узяти частинку цього закладу з собою.",
    date: "",
  },
  {
    id: "2",
    heading: "Gradus",
    description: "projects.gradus",
    image: Gradus,
    href: "https://www.google.com/maps/place/%D0%93%D1%80%D0%B0%D0%B4%D1%83%D1%81/@51.2169282,24.7064209,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNKp_d-DJHIOlwvZE_kD0TBjWXJt4ICDHDM8pa-!2e10!3e12!6shttps:%2F%2Fgz0.googleusercontent.com%2Fp%2FAF1QipNKp_d-DJHIOlwvZE_kD0TBjWXJt4ICDHDM8pa-%3Dw360-h202-k-no!7i1920!8i1079!4m7!3m6!1s0x47243b639fd3deaf:0xcef741252abe5d77!8m2!3d51.2169548!4d24.7061471!10e5!16s%2Fg%2F11hzy04dyz?entry=ttu",
    isBlured: true,
    meta_description:
      "Є багато секретів вдалої страви: інгредієнти високої якості, спосіб приготування, поєднання смаків, додавання соусів тощо...",
    date: "",
  },
  {
    id: "1",
    heading: "LELEKA ENERGY",
    description: "projects.chargers",
    image: Charge,
    href: "https://app.go-tou.com/Hj2KsCeVURiUNEb39",
    isBlured: true,
    meta_description:
      "Кількість електромобілів на дорогах України зростає і ми розуміємо всю важливість створення зарядної інфраструктури для їхніх власників, і йдемо в сторону екологічного майбутнього. Станції функціонують в Ковелі та Києві.",
    date: "",
  },
];
