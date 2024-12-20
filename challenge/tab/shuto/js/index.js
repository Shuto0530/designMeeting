$(function () {
    $(".js_tabButton").on("click", function () {
        // 1. data属性のtargetを取得
        const target = $(this).data("target");

        // 2. タブコンテンツからactiveクラスを削除
        $(".js_tabContent").removeClass("active");

        // 3. 1で取得したdata属を持つタブコンテンツにactiveクラスを追加
        $(`.js_tabContent[data-tab="${target}"]`).addClass("active");
    });
});
