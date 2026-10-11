import React from "react";
import styles from "./hw39.module.css";

export interface Post {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
}

interface PostCardProps {
  post: Post;
}

const PostActions: React.FC = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.actionLeft}>
        <button type="button" className={styles.iconBtn} title="Like">
          👍
        </button>
        <button type="button" className={styles.iconBtn} title="Dislike">
          👎
        </button>
      </div>
      <div className={styles.actionRight}>
        <button type="button" className={styles.iconBtn} title="Bookmark">
          🔖
        </button>
        <button type="button" className={styles.iconBtn} title="More">
          ···
        </button>
      </div>
    </div>
  );
};

export const PostCardBig: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className={`${styles.card} ${styles.cardBig}`}>
      <div className={styles.content}>
        <span className={styles.date}>{post.date}</span>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.text}>{post.text}</p>
        <PostActions />
      </div>
      {post.image && (
        <div className={styles.imageWrapper}>
          <img src={post.image} alt={post.title} className={styles.image} />
        </div>
      )}
    </article>
  );
};

export const PostCardMedium: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className={`${styles.card} ${styles.cardMedium}`}>
      {post.image && (
        <div className={styles.imageWrapper}>
          <img src={post.image} alt={post.title} className={styles.image} />
        </div>
      )}
      <div className={styles.content}>
        <span className={styles.date}>{post.date}</span>
        <h3 className={styles.title}>{post.title}</h3>
        <PostActions />
      </div>
    </article>
  );
};

export const PostCardSmall: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className={`${styles.card} ${styles.cardSmall}`}>
      <div className={styles.smallBody}>
        <div className={styles.content}>
          <span className={styles.date}>{post.date}</span>
          <h4 className={styles.title}>{post.title}</h4>
        </div>
        {post.image && (
          <div className={styles.smallImageWrapper}>
            <img src={post.image} alt={post.title} className={styles.image} />
          </div>
        )}
      </div>
      <PostActions />
    </article>
  );
};

interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  const bigPost = posts[0];
  const mediumPostsRow1 = posts.slice(1, 3);
  const mediumPostsRow2 = posts.slice(3, 5);
  const sidebarPosts = posts.slice(5);

  return (
    <div className={styles.blogContainer}>
      <div className={styles.mainColumn}>
        {bigPost && <PostCardBig post={bigPost} />}

        {mediumPostsRow1.length > 0 && (
          <div className={styles.mediumRow}>
            {mediumPostsRow1.map((post) => (
              <PostCardMedium key={post.id} post={post} />
            ))}
          </div>
        )}

        {mediumPostsRow2.length > 0 && (
          <div className={styles.mediumRow}>
            {mediumPostsRow2.map((post) => (
              <PostCardMedium key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>

      <aside className={styles.sidebarColumn}>
        {sidebarPosts.map((post) => (
          <PostCardSmall key={post.id} post={post} />
        ))}
      </aside>
    </div>
  );
};
