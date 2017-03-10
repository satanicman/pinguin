modules.define('social__item', ['i-bem-dom'], function(provide, BEMDOM) {
    provide(BEMDOM.declElem('social', 'item', {
        onSetMod : {
            'js': {
                'inited': function() {
                    this._icon = this.findChildBlock('icon');
                }
            }
        },
        _onMouseOver : function() {
            this._icon.setMod('hovered');
        },

        _onMouseLeave : function() {
            this._icon.delMod('hovered');
        }
    }, {
        onInit : function() {
            this._domEvents().on('mouseover', this.prototype._onMouseOver);
            this._domEvents().on('mouseleave', this.prototype._onMouseLeave);
        }
    }));
});