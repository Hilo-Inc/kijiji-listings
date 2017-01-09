function arrangeListings() {
    var n,
        node, 
        block;

    this.init = function(blocks, w, h) {
        var root = { x: 0, y: 0, w: w, h: h };

        blocks.map((block) => {
            node = this.findNode(root, block.w, block.h)
            if (node) {
              block.fit = this.splitNode(block.w, block.h);
            } else {
              console.log("This listing does not fit:", block);
            }
        })
    }

    this.findNode = function(root, w, h) {
        if (root.used) {
            return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
        } else if ((w <= root.w) && (h <= root.h)) {
            return root;
        } else {
            return false;
        }
    }

    this.splitNode = function(w, h) {
        node.used = true;
        node.down = { x: node.x, y: node.y + h, w: node.w, h: node.h - h };
        node.right = { x: node.x + w, y: node.y, w: node.w - w, h: h };
        return node;
    }

}

export default arrangeListings;
