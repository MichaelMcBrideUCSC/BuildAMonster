class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: { }};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        // Body
        this.bodyX = 300;
        this.bodyY = 350;
        // Arms
        this.armRightX = 390;
        this.armLeftX = 210;
        this.armY = 390;
        // Legs
        this.legRightX = 350;
        this.legLeftX = 250;
        this.legY = 500;
        // Eyes
        this.eyeRightX = 340;
        this.eyeLeftX = 270;
        this.eyeY = 320;
        // Mouth
        this.mouthX = 300;
        this.mouthY = 370;
        // Accessories
        this.accessRightX = 350;
        this.accessLeftX = 250;
        this.accessY = 260;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        // Load Body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");
        // Load Arms
        my.sprite.armRight = this.add.sprite(this.armRightX, this.armY, "monsterParts", "arm_whiteE.png");
        my.sprite.armLeft = this.add.sprite(this.armLeftX, this.armY, "monsterParts", "arm_whiteE.png");
        my.sprite.armLeft.flipX = true;
        // Load Legs
        my.sprite.legRight = this.add.sprite(this.legRightX, this.legY, "monsterParts", "leg_greenC.png");
        my.sprite.legLeft = this.add.sprite(this.legLeftX, this.legY, "monsterParts", "leg_greenC.png");
        my.sprite.legLeft.flipX = true;
        // Load Eyes
        my.sprite.eyeRight = this.add.sprite(this.eyeRightX, this.eyeY, "monsterParts", "eye_dead.png");
        my.sprite.eyeLeft = this.add.sprite(this.eyeLeftX, this.eyeY, "monsterParts", "eye_cute_light.png");
        my.sprite.eyeLeft.flipX = true;
        // Load Mouths
        my.sprite.mouthFangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouthB.png");
        my.sprite.mouthSmile = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouthSmile.visible = true;
        my.sprite.mouthSmile.flipY = true;
        my.sprite.mouthFangs.visible = false;
        // Load Accessories
        my.sprite.hornLrg = this.add.sprite(this.accessRightX, this.accessY, "monsterParts", "detail_yellow_horn_large.png");
        my.sprite.hornSml = this.add.sprite(this.accessLeftX, this.accessY, "monsterParts", "detail_yellow_horn_small.png");
        my.sprite.hornSml.flipX = true;

        // Load key press
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        // Event input: fang mouth
        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.mouthFangs.visible = true;
            my.sprite.mouthSmile.visible = false;
        });

        // Event input: smile mouth
        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.mouthFangs.visible = false;
            my.sprite.mouthSmile.visible = true;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
 


        // D to move right A to move left
        if (this.dKey.isDown) {
            for (const key in my.sprite) {
                my.sprite[key].x += 1;
            }
        } 
        if (this.aKey.isDown) {
            for (const key in my.sprite) {
                my.sprite[key].x -= 1;
            }
        }
    }
}