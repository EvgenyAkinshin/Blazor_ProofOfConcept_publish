// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

window.aphalinaUtils = {
    captureMouse: function (targetElement, pointerId) {
        targetElement.setPointerCapture(pointerId);
    },

    releaseMouse: function (targetElement, pointerId) {
        targetElement.releasePointerCapture(pointerId);
    },

    getWindowSize: function ()
    {
        return { width: window.innerWidth, height: window.innerHeight, devicePixelRatio: window.devicePixelRatio };
    }

};

function reportWindowSizeChanged() {

    DotNet.invokeMethodAsync('Aphalina.Drawing.Blazor', 'ReportWindowSizeChanged', { width: window.innerWidth, height: window.innerHeight, devicePixelRatio: window.devicePixelRatio });

    //heightOutput.textContent = window.innerHeight;
    //widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSizeChanged;

const handleWheel = function (e) {
    if (e.ctrlKey || e.metaKey)
        e.preventDefault();
};

window.addEventListener("wheel", handleWheel, { passive: false });


//function ()
//targetElement.setPointerCapture(pointerId);

//window.exampleJsFunctions = {
//  showPrompt: function (message) {
//    return prompt(message, 'Type anything here');
//  }
//};
