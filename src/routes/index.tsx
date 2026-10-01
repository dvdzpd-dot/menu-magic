import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";
import cevicheImage from "@/assets/ceviche.jpg";
import moleImage from "@/assets/mole.jpg";
import churrosImage from "@/assets/churros.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Carta — Cocina del Patio",
      },
      {
        name: "description",
        content:
          "Carta de temporada de Cocina del Patio: entradas, platos fuertes, postres y bebidas hechas con ingredientes de mercado.",
      },
      { property: "og:title", content: "Carta — Cocina del Patio" },
      {
        property: "og:description",
        content:
          "Carta de temporada: entradas, platos fuertes, postres y bebidas hechas con ingredientes de mercado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Dish = {
  name: string;
  description: string;
  price: string;
};

type Category = {
  id: string;
  title: string;
  note: string;
  dishes: Dish[];
};

const categories: Category[] = [
  {
    id: "entradas",
    title: "Entradas",
    note: "Para empezar, de la mano",
    dishes: [
      {
        name: "Guacamole de la casa",
        description: "Aguacate, tomate y cilantro, con totopos de maíz.",
        price: "$95",
      },
      {
        name: "Ceviche de corvina",
        description: "Corvina fresca, cítricos y chile serrano.",
        price: "$140",
      },
      {
        name: "Sopa de tortilla",
        description: "Caldo de jitomate, totopos y queso fresco.",
        price: "$85",
      },
      {
        name: "Queso fundido con chorizo",
        description: "Cazuela de queso Oaxaca, tortillas recién hechas.",
        price: "$110",
      },
    ],
  },
  {
    id: "fuertes",
    title: "Platos fuertes",
    note: "El corazón de la carta",
    dishes: [
      {
        name: "Mole negro",
        description: "Pavo de corral en mole de treinta ingredientes.",
        price: "$210",
      },
      {
        name: "Tacos de costilla a la brasa",
        description: "Costilla cocida lentamente, cebolla y limón.",
        price: "$165",
      },
      {
        name: "Chiles en nogada",
        description: "Poblano relleno, nogada de nuez y granada.",
        price: "$195",
      },
      {
        name: "Pescado a la talla",
        description: "Del día, salsa de achiote y salsa verde.",
        price: "$230",
      },
    ],
  },
  {
    id: "postres",
    title: "Postres",
    note: "El final dulce",
    dishes: [
      {
        name: "Flan de vainilla",
        description: "Caramelo oscuro y crema batida.",
        price: "$70",
      },
      {
        name: "Churros con chocolate",
        description: "Cinco churros y chocolate caliente de mesa.",
        price: "$65",
      },
      {
        name: "Tres leches",
        description: "Bizcocho bañado en tres leches y canela.",
        price: "$80",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    note: "Para acompañar",
    dishes: [
      {
        name: "Agua de jamaica",
        description: "Flor de hibisco, servida con hielo.",
        price: "$45",
      },
      {
        name: "Mezcal artesanal",
        description: "Espadín de Oaxaca, copa de barro.",
        price: "$120",
      },
      {
        name: "Café de olla",
        description: "Café con piloncillo y canela.",
        price: "$50",
      },
      {
        name: "Vino de la casa",
        description: "Copa tinta o blanca de la ruta del vino.",
        price: "$95",
      },
    ],
  },
];

const favorites = [
  {
    image: cevicheImage,
    name: "Ceviche de corvina",
    price: "$140",
  },
  {
    image: moleImage,
    name: "Mole negro",
    price: "$210",
  },
  {
    image: churrosImage,
    name: "Churros con chocolate",
    price: "$65",
  },
];

function DishRow({ dish }: { dish: Dish }) {
  return (
    <div className="flex items-baseline gap-3">
      <div>
        <h3 className="font-display text-lg font-medium text-foreground">
          {dish.name}
        </h3>
        <p className="mt-0.5 text-sm text-pretty text-muted-foreground">
          {dish.description}
        </p>
      </div>
      <span className="ml-auto whitespace-nowrap font-display text-base text-accent-foreground">
        {dish.price}
      </span>
    </div>
  );
}

function MenuSection({ category }: { category: Category }) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <p className="text-xs uppercase tracking-[0.2em] text-primary">
        {category.note}
      </p>
      <h2 className="mt-2 font-display text-2xl font-medium text-foreground sm:text-3xl">
        {category.title}
      </h2>
      <div className="mt-6 space-y-5">
        {category.dishes.map((dish) => (
          <DishRow key={dish.name} dish={dish} />
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-6 pb-4 lg:px-10">
        <span className="font-display text-xl font-medium tracking-tight">
          Cocina del Patio
        </span>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground sm:flex">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="transition-colors hover:text-primary"
            >
              {category.title}
            </a>
          ))}
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-8 pb-12 lg:px-10">
        <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">
          Cocina de temporada · desde 1998
        </p>
        <h1 className="max-w-[16ch] font-display text-4xl leading-tight font-medium text-balance sm:text-5xl lg:text-6xl">
          Sabores de la casa, servidos con calma
        </h1>
        <p className="mt-5 max-w-[52ch] text-base text-pretty text-muted-foreground sm:text-lg">
          Una carta breve que cambia con la estación. Ingredientes de mercado,
          recetas de familia y una mesa larga para quedarse.
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <img
          src={heroImage}
          alt="Mesa rústica con platillos de la casa a la luz de una vela"
          width={1920}
          height={832}
          className="aspect-[21/8] w-full rounded-xl object-cover"
        />
      </div>

      <main className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
        <h2 className="text-sm uppercase tracking-[0.2em] text-primary">
          Los favoritos de la casa
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {favorites.map((favorite) => (
            <figure
              key={favorite.name}
              className="group overflow-hidden rounded-xl bg-card"
            >
              <img
                src={favorite.image}
                alt={favorite.name}
                loading="lazy"
                width={1200}
                height={912}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <figcaption className="flex items-baseline justify-between px-4 py-3">
                <span className="font-display text-base font-medium">
                  {favorite.name}
                </span>
                <span className="font-display text-sm text-accent-foreground">
                  {favorite.price}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-14 gap-y-14 lg:mt-20 lg:grid-cols-2">
          {categories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>
      </main>

      <footer className="bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-14 sm:grid-cols-2 lg:px-10">
          <div>
            <h3 className="font-display text-xl font-medium">Horario</h3>
            <p className="mt-3 text-sm text-pretty opacity-70">
              Martes a domingo · 13:00 a 22:00
              <br />
              Lunes cerrado
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium">Dónde</h3>
            <p className="mt-3 text-sm text-pretty opacity-70">
              Calle del Mercado 14, Centro
              <br />
              Reservaciones: 555-0142 · hola@cocinadelpatio.mx
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
