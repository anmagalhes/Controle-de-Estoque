import styles from './styles.module.scss'

import Link from 'next/link'

export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headercontent}>
          
  
          <nav>
              <Link href='/'>
                <a>Home</a>
              </Link>
              <Link href='/posts'>
                <a>Conteúdos?</a>
              </Link>
              <Link href='/sobre'>
                <a>Quem somos?</a>
              </Link>

          </nav>

      



      </div>
    </header>
  )
}