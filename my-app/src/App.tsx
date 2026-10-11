import "./App.css";
import {
  type Post,
  PostList,
  PostCardBig,
  PostCardMedium,
  PostCardSmall,
} from "./components/hw39";

const dummyPost: Post = {
  id: 1,
  image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600",
  title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
  text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays.",
  date: "April 20, 2021",
  lesson_num: 39,
  author: 1,
};
const dummyPosts: Post[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600",
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab's power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    date: "April 20, 2021",
    lesson_num: 39,
    author: 1,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "Short description text...",
    date: "April 20, 2021",
    lesson_num: 39,
    author: 1,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600",
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "Short description text...",
    date: "April 20, 2021",
    lesson_num: 39,
    author: 1,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600",
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "Short description text...",
    date: "April 20, 2021",
    lesson_num: 39,
    author: 1,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1517976487502-5364969f6a6c?w=600",
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "Short description text...",
    date: "April 20, 2021",
    lesson_num: 39,
    author: 1,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600",
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    date: "April 20, 2021",
    lesson_num: 39,
    author: 1,
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600",
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    date: "April 20, 2021",
    lesson_num: 39,
    author: 1,
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=600",
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    date: "April 20, 2021",
    lesson_num: 39,
    author: 1,
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600",
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    date: "April 20, 2021",
    lesson_num: 39,
    author: 1,
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1517976487502-5364969f6a6c?w=600",
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    date: "April 20, 2021",
    lesson_num: 39,
    author: 1,
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600",
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    text: "",
    date: "April 20, 2021",
    lesson_num: 39,
    author: 1,
  },
];

function App() {
  return (
    <main>
      <h2>1. Большая карточка</h2>
      <PostCardBig post={dummyPost} />

      <h2>2. Средняя карточка</h2>
      <PostCardMedium post={dummyPost} />

      <h2>3. Маленькая карточка</h2>
      <PostCardSmall post={dummyPost} />
      <PostList posts={dummyPosts} />
    </main>
  );
}

export default App;
