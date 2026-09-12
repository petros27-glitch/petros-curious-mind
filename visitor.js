async function recordVisit() {
    if (sessionStorage.getItem("pcm_visit_recorded")) return;

    const { error } = await supabaseClient
        .from("site_visits")
        .insert({});

    if (!error) {
        sessionStorage.setItem("pcm_visit_recorded", "1");
    }
}

recordVisit();