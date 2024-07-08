import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome potential test subject to the <span className="nowrap">Aperture Science Task Management System</span></h1>
            </header>
            <main className="public__main">
                <p>Aperture Laboraties is a subsiduary of Aperture Science, Inc a United States based scientific research corporation. Formally trading as Aperture Fixtures a shower curtain manufacturer the organisation evolved and moved into the theoretical physics research realm. 
                <br /><br />
                This is the Aperture Science Task Management System where research tasks will be assigned to current and future employees!
                <br /><br />
                You are here because you display the ideal characteristics of a test candidate, you are currently alive and contain equal to or greater than one limb. Congratulations!</p>
                <address className="public__addr">
                    Aperture Science Enrichment Center<br />
                    Upper Michigan<br />
                </address>
                <br />
                <p>CEO: Cave Johnson<br />
                T/CEO: GLADoS</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public