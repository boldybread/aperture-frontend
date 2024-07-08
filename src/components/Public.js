import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to the <span className="nowrap">Aperture Science Task Management System</span></h1>
            </header>
            <main className="public__main">
                <p>Aperture Laboraties is a subsiduary of Aperture Science, Inc a United States based scientific research corporation. Formally trading as Aperture Fixtures a shower curtain manufacturer the organisation evolved and moved into the theoretical physics research realm. This is the Aperture Science Task Management System where research tasks will be assigned to current and future employees!</p>
                <address className="public__addr">
                    Aperture Science Enrichment Center<br />
                    Upper Michigan<br />
                </address>
                <br />
                <p>CEO: Cave Johnson</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public