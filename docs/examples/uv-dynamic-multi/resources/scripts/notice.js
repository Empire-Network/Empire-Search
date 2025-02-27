const delay = ms => new Promise(res => setTimeout(res, ms));


async function greet(){
    const style = 'background-color: black; color: white; font-style: italic; border: 5px solid red; font-size: 2em;'
    let visited = localStorage.getItem('visited')
    await delay(500);
    console.log("%cPlease, do not put anything in this developer console. You risk your data.", style)
    await delay(500);
    if (!visited) { 
        console.log('showing warning')
        alert('Hello! Thanks for using Empire Unblocker.\nPlease be aware that this proxy contains the public beta of Dynamic. Please report bugs to Dynamics and our GitHub issues page :)\n\n(we will only show you this announcement once.)')
    }
    localStorage.setItem("visited", "true")
}
greet()
