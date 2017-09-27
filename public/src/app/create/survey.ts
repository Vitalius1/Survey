export class Survey {
    constructor(
        public creator: string = "",
        
        public question: string = "",

        public option1: string = "",
        public option1count: number = 0,

        public option2: string = "",
        public option2count: number = 0,

        public option3: string = "",
        public option3count: number = 0,

        public option4: string = "",
        public option4count: number = 0,
    ) { }
}