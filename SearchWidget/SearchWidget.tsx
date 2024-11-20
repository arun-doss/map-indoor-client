import { TRUE } from "ol/functions";

class SearchExtent {
    xTopLeft: Number;
    yTopLeft: Number;
    xBottomRight: Number;
    yBottomRight: Number;
    constructor(xTopLeft, yTopLeft, xBottomRight, yBottomRight) {
        this.xTopLeft = xTopLeft;
        this.yTopLeft = yTopLeft;
        this.xBottomRight = xBottomRight;
        this.yBottomRight = yBottomRight;
    }

    isValid = ()=> {
        if((this.xBottomRight.valueOf() - this.xTopLeft.valueOf()) >= 0 && (this.yBottomRight.valueOf() - this.yTopLeft.valueOf()) >= 0) {
            return true;
        } else {
            return false;
        }
    }
}

class AddressSearchSource {
    supportedSources = ["pelias"];
    isValidSource(searchSourceName:string) {
        return this.supportedSources.includes(searchSourceName);
    }
}
const SupportedAddressSources = ["pelias", "google"];
class SearchWidget {

    isCreated:Boolean = false;

    constructor(searchExtent:SearchExtent, searchSource:string, elementId:Element) {
        if(SupportedAddressSources.includes(searchSource)) {
            if(searchExtent.isValid()){
                this.isCreated = true;
            }
        }
    }
    

}

export {SearchExtent, SearchWidget}