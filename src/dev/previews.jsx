import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import App from "../App";
import {Navbar} from "../components/Navbar";
import {TextForm} from "../components/TextForm";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
            <ComponentPreview path="/TextForm">
                <TextForm/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews