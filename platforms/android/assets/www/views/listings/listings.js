(function () {
    "use strict";

    var appBar;
    window.appBarCommandsToShow = undefined;

    WinJS.UI.Pages.define("./views/listings/listings.html", {

        ready: function (element, options) {

            appBar = document.getElementById("appBar").winControl;
            appBar.getCommandById('cmd1').addEventListener("click", cmd1, false);

            appBar.getCommandById('cmd2').addEventListener("click", cmd2, false);

            this.appBarShowOnlyCommands(undefined);

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element, viewState, lastViewState) {
            // / <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        },


        // appBar properties
        btnPrevious: function (args) {
            WinJS.Navigation.navigate('./views/listings/listings.html', args);
        },

        appBarState: function () {
            appBar.closedDisplayMode = 'minimal';
            appBar.hide()
            appBar.show();

        },

        appBarShowOnlyCommands: function (cmds) {

            var defaultButtons = [cmdCrawl, cmdDownload];

            appBar.closedDisplayMode = 'minimal';
            appBar.sticky = false;
            appBar.show();

            if (cmds !== undefined && cmds.length > 0) {
                appBar.showOnlyCommands(cmds);

            } else {
                appBar.showOnlyCommands(defaultButtons);
            }
        }
    });



    function cmd1() {
        console.log("cmd1 clicked");
    }

    function cmd2() {
        console.log("cmd2 clicked");
    }

})();
