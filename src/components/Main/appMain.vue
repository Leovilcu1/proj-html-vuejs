<script>
        import appMainCompetitive from './appMainCompetitive.vue';
        import appMainBattle from './appMainBattle.vue';
        import appMainFacts from './appMainFacts.vue';
        import appMainStreaming from './appMainStreaming.vue';
        import appMainFeedback from './appMainFeedback.vue';
        import appMainOffer from './appMainOffer.vue';
        import appMainArticles from './appMainArticles.vue';

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
                },
                
        }
</script>


<template>
        <main class="">
                <appMainCompetitive/>
                <appMainBattle/>
                <appMainFacts/>
                <appMainStreaming/>
                <appMainFeedback/>
                <appMainOffer/>
                <appMainArticles/>

        </main>
        

</template>


<style lang="scss" scoped>

</style>