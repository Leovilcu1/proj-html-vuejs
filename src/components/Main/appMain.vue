<script>
        import appMainCompetitive from './appMainCompetitive.vue';
        import appMainBattle from './appMainBattle.vue';
        import appMainFacts from './appMainFacts.vue';
        import appMainStreaming from './appMainStreaming.vue';
        import appMainFeedback from './appMainFeedback.vue';
        import appMainOffer from './appMainOffer.vue';
        import appMainArticles from './appMainArticles.vue';
        import appMainJumbotron from './appMainJumbotron.vue';

        export default{
                name:"appMain",
                components:{
                        appMainCompetitive,
                        appMainBattle,
                        appMainFacts,
                        appMainStreaming,
                        appMainFeedback,
                        appMainOffer,
                        appMainArticles,
                        appMainJumbotron


                        
                }
        }
</script>


<template>
        <main class="bg-secondary">
                <appMainCompetitive/>
                <appMainBattle/>
                <appMainFacts/>
                <appMainStreaming/>
                <appMainFeedback/>
                <appMainOffer/>
                <appMainArticles/>
                <appMainJumbotron/>
        </main>
        

</template>


<style lang="scss" scoped>

</style>