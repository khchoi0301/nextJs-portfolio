import Link from "next/link";
import Head from "next/head";
import Router from "next/router"
import Nprogress from "nprogress"

Router.onRouteChangeStart = url => {
    console.log(url)
    Nprogress.start()
}
Router.onRouteChangeComplete = () => Nprogress.done()
Router.onRouteChangeError = () => Nprogress.done()


export default ({ children, title }) => (
    <div className='root'>
        <Head>
            <title>Next Portfolio</title>
        </Head>
        <header>
            <Link href="/"><a className='homeButton'>KIHONG CHOI</a></Link>
            <Link href="/about"><a>about me</a></Link>
            <Link href="/hireme"><a>contact</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
        </header>
        <main>{children}</main>
        <footer>&copy;{new Date().getFullYear()}</footer>
        <style jsx>{`
            main {
                margin : 2rem;
                display: inline;
            }
            .homeButton {
                letter-spacing: 4px;
            }
            .root {
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
            }

            header {
                width:100%;
                display:flex;
                justify-content: space-around;
                padding: 1em;
                font-size: 1.2rem;
                background: black;
            }

            header a {
                color : darkgray;
                text-decoration: none;
            }

            header a:hover {
                font-weight: bold;
                color : lightgray;
            }
            
            footer {
                padding: 1em;
            }
        `}</style>
        <style global jsx>{`
            body {
                margin : 0;
                font-size: 110%;
                background: #f0f0f0;
                
            }
        `}</style>
    </div>
);
