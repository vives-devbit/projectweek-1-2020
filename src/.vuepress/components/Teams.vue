<template>
  <div class="teams">
    <ul>
      <li v-for="team in teams">
        <h2>Team {{ team.number }}</h2>
        <p>Students:</p>
        <ul>
          <li v-for="student in team.students">{{ student }}</li>
        </ul>
        <p>Mentors:</p>
        <ol>
          <li v-for="mentor in team.mentors">{{ mentor }}</li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      teams: [],
    }
  },
  mounted() {
    this.teams = this.$frontmatter.teams
  }
}
</script>

<style>

div.teams>ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  list-style: none;
}
div.teams>ul>li {
  /* background-color: blue; */
    border: 1px solid #eaecef; 
    background-color: #eaecef;
    border-radius: 10px;
    padding: 20px;
}

div.teams>ul>li h2 {
  margin: 0px;
  border-bottom: 1px solid #AAA;
}
</style>