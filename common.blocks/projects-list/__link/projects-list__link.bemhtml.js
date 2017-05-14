block('projects-list').elem('link')(
    tag()('a'),
    attrs()(function() {
        var ctx = this.ctx,
            attrs = {};

        ctx.title && (attrs.title = ctx.title);
        ctx.url && (attrs.href = ctx.url);

        return attrs;
    })
);