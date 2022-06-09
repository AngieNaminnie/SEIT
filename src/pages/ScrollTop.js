import React from 'react';
import { l } from 'react-use';

function ScrollTop() {
    const [ScrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
            setScrollTop(true)  
            } else {
            setScrollTop(false)
        }
      })
}, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <div className="Landing"></div>

    {ScrollTop && (
        <button 
            style={{
                position: "fixed",
                botton: "50px",
                right: "50px",
                height: "50px",
                with: "50px",
                fontsize: "50px", 
        }}
        onClick={scrollUp}
        >

        </button>
    )}
}