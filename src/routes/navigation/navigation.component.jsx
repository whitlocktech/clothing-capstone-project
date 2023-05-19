import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import './navigation.styles.scss'
import Footer from '../../components/footer/footer'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                </div>
            </div>
        <Outlet />
        <Footer />
        </Fragment>
            )
}

export default Navigation