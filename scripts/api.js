 export class Github{
    constructor(){
        this.client_id="Ov23liYEHu0d3MENuO88 ";
        this.client_secret="67b070a6f18139394b77e9b4f0c2cb811b95a797 ";
        this.per_page=10;
        this.short="asc"
    }


    async fetchUserData(username){
    
        const profileRes= await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoRes= await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.short}`)
        const data = await profileRes.json();
        const repos= await repoRes.json();
        return {data ,repos};
        
    }
        
    }
