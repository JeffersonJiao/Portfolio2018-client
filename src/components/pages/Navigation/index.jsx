import React, { Component } from 'react'
import { Link , animateScroll as scroll } from 'react-scroll'
import './navigation.css'
export class Nav extends Component {

    state = {
        windowPos :0,
    }
    
    handleScroll = () =>{
        let windowPos = window.pageYOffset;
        this.setState({windowPos});
        }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll);
        }
    scrollToTop = () =>{
        scroll.scrollToTop();
        }
    handleSetActive = (to) => {
        console.log(to);
        }
    render() {
        return (
        <React.Fragment>
            <div className={"nav-wrapper " + (this.state.windowPos > 50 ? 'nav-fixed' : 'nav-relative')}>
                <nav className="container">
                    <div className="float-left">
                        <a className="logo" onClick={this.scrollToTop}> Jeff Jiao
                        </a>
                    </div>
                    <ul className="float-right">
                        <li >
                            <Link activeClass="active" className="menu" to="about" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>
                                About me
                            </Link>
                        </li>
                        <li >
                            <Link activeClass="active" className="menu" to="works" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>
                                My works
                            </Link>
                        </li>
                        <li >
                            <Link activeClass="active" className="menu" to="contact" spy={true} smooth={true} offset={-100} duration={500} onSetActive={this.handleSetActive}>
                                Contact me
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
        )
  }
}

export default Nav
