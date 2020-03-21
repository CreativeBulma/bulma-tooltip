document.addEventListener('DOMContentLoaded', function() {
    // clipboard
    var clipInit = false;
    var codes = document.querySelectorAll('code') || [];
    codes.forEach(function(code) {
        var text = code.innerHTML;

        if (text.length > 5) {
            if (!clipInit) {
                var text, clip = new ClipboardJS('.copy-to-clipboard', {
                    text: function(trigger) {
                        text = trigger.previousSibling.innerHTML;
                        return text.replace(/^\$\s/gm, '');
                    }
                });

                var inPre;
                clip.on('success', function(e) {
                    e.clearSelection();
                    inPre = e.trigger.parentNode.tagName == 'PRE';
                    e.trigger.setAttribute('aria-label', 'Copied to clipboard!');
                    e.trigger.classList.add('tooltipped');
                    e.trigger.classList.add('tooltipped-' + (inPre ? 'w' : 's'));
                });

                clip.on('error', function(e) {
                    inPre = e.trigger.parentNode.tagName == 'PRE';
                    e.trigger.setAttribute('aria-label', fallbackMessage(e.action));
                    e.trigger.classList.add('tooltipped');
                    e.trigger.classList.add('tooltipped-' + (inPre ? 'w' : 's'));
                    document.addEventListener('copy', function(){
                        e.trigger.setAttribute('aria-label', 'Copied to clipboard!');
                        e.trigger.classList.add('tooltipped');
                        e.trigger.classList.add('tooltipped-' + (inPre ? 'w' : 's'));
                    });
                });

                clipInit = true;
            }

            var copyNode = document.createElement('div');
            copyNode.classList.add('copy-to-clipboard');
            copyNode.setAttribute('title', 'Copy to clipboard');

            code.after(copyNode);
            code.nextSibling.addEventListener('mouseleave', function() {
                this.setAttribute('aria-label', null);
                this.classList.remove('tooltipped');
                this.classList.remove('tooltipped-s');
                this.classList.remove('tooltipped-w');
            });
        }
    });

    const tabs = document.querySelectorAll('[data-toggle="tab"]') || [];
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            const tabPane = document.querySelector(e.currentTarget.dataset.target);

            const activeTab = e.currentTarget.closest('.tabs ul').querySelector('li.is-active');
            const activeTabPane = document.querySelector(activeTab.dataset.target);
            if (activeTab && !activeTab.isSameNode(e.currentTarget)) {
                activeTab.classList.remove('is-active');
                if (activeTabPane) {
                    activeTabPane.classList.remove('is-active');
                }

            }

            e.currentTarget.classList.add('is-active');
            if (tabPane) {
                tabPane.classList.add('is-active');
            }
        });
    });
}, false);