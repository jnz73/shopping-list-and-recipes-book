export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name, description, imagepath) {
        this.name = name;
        this.description = description;
        this.imagePath = imagepath;
    }
}
