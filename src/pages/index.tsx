import Head from 'next/head';

import { FiUser, FiCalendar } from 'react-icons/fi';
import styles from '../styles/pages/home.module.scss';

// import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';
import commonStyles from '../styles/common.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps): JSX.Element {
  const a = postsPagination?.next_page;

  return (
    <div className={styles.container}>
      <Head>
        <title>Posts | SpaceTraveling</title>
      </Head>

      <div className={styles.content}>
        <header>
          <img src="./logo.svg" alt="logo" />
        </header>

        <section className={styles.postsContainer}>
          <div className={styles.post}>
            <h2>
              <a href="/"> How to use Hooks </a>
            </h2>
            <p className={styles.summary}>
              Thinking in sincronization instead life cycles.
            </p>

            <div>
              <span>
                <FiCalendar size={20} />
                <time>15 Mar 2021</time>
              </span>

              <span>
                <FiUser size={20} />
                <p>Joseph Oliveira</p>
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <h2>
              <a href="/"> How to use Hooks </a>
            </h2>
            <p className={styles.summary}>
              Thinking in sincronization instead life cycles.
            </p>

            <div>
              <span>
                <FiCalendar size={20} />
                <time>15 Mar 2021</time>
              </span>

              <span>
                <FiUser size={20} />
                <p>Joseph Oliveira</p>
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <h2>
              <a href="/"> How to use Hooks </a>
            </h2>
            <p className={styles.summary}>
              Thinking in sincronization instead life cycles.
            </p>

            <div>
              <span>
                <FiCalendar size={20} />
                <time>15 Mar 2021</time>
              </span>

              <span>
                <FiUser size={20} />
                <p>Joseph Oliveira</p>
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <h2>
              <a href="/"> How to use Hooks </a>
            </h2>
            <p className={styles.summary}>
              Thinking in sincronization instead life cycles.
            </p>

            <div>
              <span>
                <FiCalendar size={20} />
                <time>15 Mar 2021</time>
              </span>

              <span>
                <FiUser size={20} />
                <p>Joseph Oliveira</p>
              </span>
            </div>
          </div>

          <div className={styles.post}>
            <h2>
              <a href="/"> How to use Hooks </a>
            </h2>
            <p className={styles.summary}>
              Thinking in sincronization instead life cycles.
            </p>

            <div>
              <span>
                <FiCalendar size={20} />
                <time>15 Mar 2021</time>
              </span>

              <span>
                <FiUser size={20} />
                <p>Joseph Oliveira</p>
              </span>
            </div>
          </div>
        </section>

        <button type="button"> Carregar mais posts </button>
      </div>
    </div>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
