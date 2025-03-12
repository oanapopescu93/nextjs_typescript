import styles from './PostsPage.module.scss'
import { useTranslation } from 'react-i18next'

interface Post {
  id: number;
  page: string;
  title: string;
}

interface PostsPageProps {
  posts: Post[];
  onPostClick: (id: number) => void; // Callback function passed from the parent
}

const PostsPage = ({ posts, onPostClick }: PostsPageProps) => {
  const { t } = useTranslation('common')

  const handleClick = (id: number) => {
    onPostClick(id)
  }

  return (
    <div className={styles.postsPage}>
      <h1>{t('posts_title')}</h1>
      <ul>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.page}</p>
              <button onClick={() => handleClick(post.id)}>
                View Post
              </button>
            </li>
          ))
        ) : (
          <p>{t('no_data')}</p>
        )}
      </ul>
    </div>
  );
};

export default PostsPage;