import Style from './fcc.button.module.css'
import PropTypes from 'prop-types'

const FCCButtonComponent = ({
    purple="Place Holder",
    white='Place Holder',
    href = '',
    onclickPurple
}) =>{
    const purpleLen = purple.trim().length;
    const whiteLen =white.trim().length;

    const maxLen = Math.max(purpleLen,whiteLen);

    const buttonWidth = `${maxLen}rem`

    return(
    <div className={Style.buttonCon}>
        <button type='button' className={Style.purple} style={{width: buttonWidth}} id='new-quote' onClick={onclickPurple}>{purple}</button>
        <a className={Style.white} style={{width: buttonWidth}} id='tweet-quote' href={href}>{white}</a>
    </div>);
}

FCCButtonComponent.propTypes = {
    purple: PropTypes.string,
    white: PropTypes.string,
    href: PropTypes.string,
    onclickPurple: PropTypes.func,
}

export default FCCButtonComponent
