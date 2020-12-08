import { useContext } from 'react';
import { ThemeContext } from 'styled-components'
export default (moduleName) => {
    const context = useContext(ThemeContext)
    const hasModule = context.hasOwnProperty(moduleName) 
    if(process.env.NODE_ENV === 'development') {
        if((typeof moduleName !== 'undefined') && !hasModule) {
            console.warn(`Expected moduleName: ${Object.keys(context)}, Now moduleName is: ${moduleName}`)
        }
    }
    return hasModule ? context[moduleName] : context
}