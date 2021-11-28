'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', [{
      "imageURL": "http://imageshack.us/diam/id/ornare/imperdiet/sapien.json?in=eu&tempor=tincidunt&turpis=in&nec=leo&euismod=maecenas&scelerisque=pulvinar&quam=lobortis&turpis=est&adipiscing=phasellus&lorem=sit&vitae=amet&mattis=erat&nibh=nulla&ligula=tempus&nec=vivamus&sem=in&duis=felis&aliquam=eu&convallis=sapien&nunc=cursus&proin=vestibulum&at=proin&turpis=eu&a=mi&pede=nulla&posuere=ac",
      "text": "elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis",
      "order": 1,
      "organizationID": "b4c4f907-42ca-479e-9df7-f28f0cc6e705"
    }, {
      "imageURL": "https://storify.com/tincidunt/ante.html?ut=in&suscipit=felis&a=eu&feugiat=sapien&et=cursus&eros=vestibulum&vestibulum=proin&ac=eu&est=mi&lacinia=nulla&nisi=ac&venenatis=enim&tristique=in&fusce=tempor&congue=turpis&diam=nec&id=euismod&ornare=scelerisque&imperdiet=quam&sapien=turpis&urna=adipiscing&pretium=lorem&nisl=vitae&ut=mattis&volutpat=nibh&sapien=ligula&arcu=nec&sed=sem&augue=duis&aliquam=aliquam",
      "text": "neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris",
      "order": 2,
      "organizationID": "a2a08c38-6869-4bee-8aea-439c60fed4ce"
    }, {
      "imageURL": "https://sakura.ne.jp/nisl/nunc/nisl.png?id=pede&sapien=lobortis&in=ligula&sapien=sit&iaculis=amet&congue=eleifend&vivamus=pede&metus=libero&arcu=quis&adipiscing=orci&molestie=nullam&hendrerit=molestie&at=nibh&vulputate=in&vitae=lectus&nisl=pellentesque&aenean=at",
      "text": "convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum",
      "order": 3,
      "organizationID": "41e5d4f7-d2eb-44c0-bc3d-6dd167b24374"
    }, {
      "imageURL": "http://admin.ch/metus/sapien/ut/nunc/vestibulum/ante/ipsum.js?neque=mattis&aenean=egestas&auctor=metus&gravida=aenean&sem=fermentum&praesent=donec&id=ut&massa=mauris&id=eget&nisl=massa&venenatis=tempor&lacinia=convallis&aenean=nulla&sit=neque&amet=libero&justo=convallis&morbi=eget&ut=eleifend&odio=luctus&cras=ultricies&mi=eu&pede=nibh&malesuada=quisque&in=id&imperdiet=justo&et=sit&commodo=amet&vulputate=sapien&justo=dignissim&in=vestibulum&blandit=vestibulum&ultrices=ante&enim=ipsum&lorem=primis&ipsum=in&dolor=faucibus&sit=orci&amet=luctus&consectetuer=et&adipiscing=ultrices&elit=posuere&proin=cubilia&interdum=curae&mauris=nulla&non=dapibus&ligula=dolor&pellentesque=vel&ultrices=est&phasellus=donec&id=odio&sapien=justo&in=sollicitudin&sapien=ut&iaculis=suscipit&congue=a&vivamus=feugiat&metus=et",
      "text": "potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla",
      "order": 4,
      "organizationID": "f202c70d-6ad8-4885-9c0d-4a65f3874ded"
    }, {
      "imageURL": "https://state.gov/ac.png?est=quam&donec=fringilla&odio=rhoncus&justo=mauris&sollicitudin=enim&ut=leo&suscipit=rhoncus&a=sed&feugiat=vestibulum&et=sit&eros=amet&vestibulum=cursus&ac=id&est=turpis&lacinia=integer&nisi=aliquet&venenatis=massa&tristique=id&fusce=lobortis&congue=convallis&diam=tortor&id=risus&ornare=dapibus&imperdiet=augue&sapien=vel&urna=accumsan&pretium=tellus&nisl=nisi&ut=eu&volutpat=orci&sapien=mauris&arcu=lacinia&sed=sapien&augue=quis&aliquam=libero&erat=nullam&volutpat=sit&in=amet&congue=turpis&etiam=elementum&justo=ligula&etiam=vehicula&pretium=consequat&iaculis=morbi&justo=a&in=ipsum&hac=integer&habitasse=a&platea=nibh&dictumst=in&etiam=quis&faucibus=justo&cursus=maecenas&urna=rhoncus&ut=aliquam&tellus=lacus&nulla=morbi&ut=quis&erat=tortor&id=id&mauris=nulla&vulputate=ultrices",
      "text": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod",
      "order": 5,
      "organizationID": "01a4f7fd-2b26-42ae-b75a-ee27fb525e1c"
    }, {
      "imageURL": "https://amazon.de/nisi/volutpat.html?eu=eleifend&felis=luctus&fusce=ultricies&posuere=eu&felis=nibh&sed=quisque&lacus=id&morbi=justo&sem=sit&mauris=amet&laoreet=sapien&ut=dignissim&rhoncus=vestibulum&aliquet=vestibulum&pulvinar=ante&sed=ipsum&nisl=primis&nunc=in&rhoncus=faucibus&dui=orci&vel=luctus&sem=et&sed=ultrices&sagittis=posuere&nam=cubilia&congue=curae&risus=nulla&semper=dapibus&porta=dolor&volutpat=vel&quam=est&pede=donec&lobortis=odio&ligula=justo&sit=sollicitudin&amet=ut&eleifend=suscipit&pede=a&libero=feugiat&quis=et&orci=eros&nullam=vestibulum&molestie=ac&nibh=est&in=lacinia&lectus=nisi&pellentesque=venenatis&at=tristique&nulla=fusce&suspendisse=congue&potenti=diam",
      "text": "aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo",
      "order": 6,
      "organizationID": "0a6a2900-bc84-48d0-bc64-704b43852d65"
    }, {
      "imageURL": "http://people.com.cn/magna.png?molestie=praesent&sed=blandit&justo=lacinia&pellentesque=erat&viverra=vestibulum&pede=sed&ac=magna&diam=at&cras=nunc&pellentesque=commodo&volutpat=placerat&dui=praesent&maecenas=blandit&tristique=nam&est=nulla&et=integer&tempus=pede&semper=justo&est=lacinia&quam=eget&pharetra=tincidunt&magna=eget&ac=tempus&consequat=vel&metus=pede&sapien=morbi&ut=porttitor&nunc=lorem&vestibulum=id&ante=ligula&ipsum=suspendisse&primis=ornare&in=consequat&faucibus=lectus&orci=in&luctus=est&et=risus&ultrices=auctor&posuere=sed&cubilia=tristique&curae=in&mauris=tempus&viverra=sit&diam=amet&vitae=sem&quam=fusce&suspendisse=consequat&potenti=nulla&nullam=nisl&porttitor=nunc&lacus=nisl&at=duis&turpis=bibendum&donec=felis&posuere=sed&metus=interdum&vitae=venenatis&ipsum=turpis&aliquam=enim&non=blandit&mauris=mi&morbi=in&non=porttitor&lectus=pede&aliquam=justo&sit=eu&amet=massa&diam=donec&in=dapibus&magna=duis&bibendum=at&imperdiet=velit&nullam=eu&orci=est&pede=congue&venenatis=elementum&non=in&sodales=hac&sed=habitasse&tincidunt=platea&eu=dictumst&felis=morbi&fusce=vestibulum&posuere=velit",
      "text": "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue",
      "order": 7,
      "organizationID": "ee5d763e-437f-45a2-930d-9afb5a5fc8ea"
    }, {
      "imageURL": "http://skyrock.com/felis/eu/sapien.aspx?ultrices=sapien&posuere=arcu&cubilia=sed&curae=augue&nulla=aliquam&dapibus=erat&dolor=volutpat&vel=in&est=congue&donec=etiam&odio=justo&justo=etiam&sollicitudin=pretium&ut=iaculis&suscipit=justo&a=in&feugiat=hac&et=habitasse&eros=platea&vestibulum=dictumst&ac=etiam&est=faucibus&lacinia=cursus&nisi=urna&venenatis=ut&tristique=tellus&fusce=nulla&congue=ut&diam=erat&id=id&ornare=mauris&imperdiet=vulputate&sapien=elementum&urna=nullam&pretium=varius&nisl=nulla&ut=facilisi&volutpat=cras&sapien=non&arcu=velit&sed=nec&augue=nisi&aliquam=vulputate&erat=nonummy&volutpat=maecenas&in=tincidunt&congue=lacus&etiam=at&justo=velit&etiam=vivamus&pretium=vel&iaculis=nulla&justo=eget&in=eros&hac=elementum&habitasse=pellentesque&platea=quisque&dictumst=porta&etiam=volutpat&faucibus=erat&cursus=quisque&urna=erat&ut=eros&tellus=viverra&nulla=eget&ut=congue&erat=eget&id=semper&mauris=rutrum&vulputate=nulla&elementum=nunc&nullam=purus&varius=phasellus&nulla=in&facilisi=felis&cras=donec&non=semper&velit=sapien&nec=a&nisi=libero&vulputate=nam&nonummy=dui&maecenas=proin&tincidunt=leo&lacus=odio&at=porttitor&velit=id",
      "text": "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in",
      "order": 8,
      "organizationID": "2f9ce0aa-69ff-45b0-acc5-8e65f1b1e28a"
    }, {
      "imageURL": "http://cloudflare.com/eu/orci/mauris/lacinia/sapien.xml?justo=sem&etiam=sed&pretium=sagittis&iaculis=nam&justo=congue&in=risus&hac=semper&habitasse=porta&platea=volutpat&dictumst=quam&etiam=pede&faucibus=lobortis&cursus=ligula&urna=sit&ut=amet&tellus=eleifend&nulla=pede&ut=libero&erat=quis&id=orci&mauris=nullam&vulputate=molestie&elementum=nibh&nullam=in&varius=lectus&nulla=pellentesque&facilisi=at&cras=nulla&non=suspendisse&velit=potenti&nec=cras&nisi=in&vulputate=purus&nonummy=eu&maecenas=magna&tincidunt=vulputate&lacus=luctus&at=cum&velit=sociis&vivamus=natoque&vel=penatibus&nulla=et&eget=magnis&eros=dis&elementum=parturient&pellentesque=montes&quisque=nascetur&porta=ridiculus&volutpat=mus&erat=vivamus&quisque=vestibulum&erat=sagittis&eros=sapien&viverra=cum&eget=sociis&congue=natoque&eget=penatibus&semper=et&rutrum=magnis&nulla=dis&nunc=parturient&purus=montes&phasellus=nascetur&in=ridiculus&felis=mus&donec=etiam&semper=vel&sapien=augue&a=vestibulum&libero=rutrum&nam=rutrum&dui=neque&proin=aenean&leo=auctor&odio=gravida&porttitor=sem&id=praesent&consequat=id&in=massa&consequat=id&ut=nisl&nulla=venenatis&sed=lacinia&accumsan=aenean&felis=sit&ut=amet&at=justo&dolor=morbi",
      "text": "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi",
      "order": 9,
      "organizationID": "5960ec29-a9e6-433f-8a31-36f7bb6e69db"
    }, {
      "imageURL": "https://tuttocitta.it/nascetur/ridiculus/mus/vivamus/vestibulum.xml?tortor=turpis&sollicitudin=nec&mi=euismod&sit=scelerisque&amet=quam&lobortis=turpis&sapien=adipiscing&sapien=lorem&non=vitae&mi=mattis&integer=nibh&ac=ligula&neque=nec&duis=sem&bibendum=duis&morbi=aliquam&non=convallis&quam=nunc&nec=proin&dui=at&luctus=turpis&rutrum=a&nulla=pede&tellus=posuere&in=nonummy&sagittis=integer&dui=non&vel=velit&nisl=donec&duis=diam&ac=neque&nibh=vestibulum&fusce=eget&lacus=vulputate&purus=ut&aliquet=ultrices",
      "text": "nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed",
      "order": 10,
      "organizationID": "76076884-a99b-4ca8-b1fe-b692e06648be"
    }, {
      "imageURL": "https://imgur.com/faucibus/orci.html?integer=massa&ac=id&leo=nisl&pellentesque=venenatis&ultrices=lacinia&mattis=aenean&odio=sit&donec=amet&vitae=justo&nisi=morbi&nam=ut&ultrices=odio&libero=cras&non=mi&mattis=pede&pulvinar=malesuada&nulla=in&pede=imperdiet&ullamcorper=et&augue=commodo&a=vulputate&suscipit=justo&nulla=in&elit=blandit&ac=ultrices&nulla=enim&sed=lorem&vel=ipsum&enim=dolor&sit=sit&amet=amet&nunc=consectetuer&viverra=adipiscing&dapibus=elit&nulla=proin&suscipit=interdum&ligula=mauris&in=non&lacus=ligula&curabitur=pellentesque&at=ultrices&ipsum=phasellus&ac=id&tellus=sapien&semper=in&interdum=sapien&mauris=iaculis&ullamcorper=congue&purus=vivamus&sit=metus&amet=arcu&nulla=adipiscing&quisque=molestie&arcu=hendrerit&libero=at&rutrum=vulputate&ac=vitae&lobortis=nisl&vel=aenean&dapibus=lectus&at=pellentesque&diam=eget&nam=nunc&tristique=donec&tortor=quis&eu=orci&pede=eget",
      "text": "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam",
      "order": 11,
      "organizationID": "735397e5-508f-4667-a01c-5083d77130c8"
    }, {
      "imageURL": "http://yellowpages.com/id/ligula/suspendisse.png?velit=neque&id=vestibulum&pretium=eget&iaculis=vulputate&diam=ut&erat=ultrices&fermentum=vel&justo=augue&nec=vestibulum&condimentum=ante&neque=ipsum&sapien=primis&placerat=in&ante=faucibus&nulla=orci&justo=luctus&aliquam=et&quis=ultrices&turpis=posuere&eget=cubilia&elit=curae&sodales=donec&scelerisque=pharetra&mauris=magna&sit=vestibulum&amet=aliquet&eros=ultrices&suspendisse=erat&accumsan=tortor&tortor=sollicitudin&quis=mi&turpis=sit&sed=amet&ante=lobortis&vivamus=sapien&tortor=sapien&duis=non&mattis=mi&egestas=integer&metus=ac&aenean=neque&fermentum=duis&donec=bibendum&ut=morbi&mauris=non&eget=quam&massa=nec&tempor=dui&convallis=luctus&nulla=rutrum&neque=nulla&libero=tellus&convallis=in&eget=sagittis&eleifend=dui&luctus=vel&ultricies=nisl&eu=duis&nibh=ac&quisque=nibh&id=fusce&justo=lacus&sit=purus&amet=aliquet&sapien=at&dignissim=feugiat&vestibulum=non&vestibulum=pretium&ante=quis&ipsum=lectus&primis=suspendisse&in=potenti",
      "text": "eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue",
      "order": 12,
      "organizationID": "86b05cf3-a1e1-4238-a41e-b326d09916a7"
    }, {
      "imageURL": "https://si.edu/in/hac/habitasse/platea/dictumst.xml?felis=sed&sed=tristique&interdum=in&venenatis=tempus&turpis=sit&enim=amet&blandit=sem&mi=fusce&in=consequat&porttitor=nulla&pede=nisl&justo=nunc&eu=nisl&massa=duis&donec=bibendum&dapibus=felis&duis=sed&at=interdum&velit=venenatis&eu=turpis&est=enim&congue=blandit&elementum=mi&in=in&hac=porttitor&habitasse=pede&platea=justo&dictumst=eu&morbi=massa&vestibulum=donec&velit=dapibus&id=duis&pretium=at&iaculis=velit&diam=eu&erat=est&fermentum=congue&justo=elementum&nec=in&condimentum=hac&neque=habitasse&sapien=platea&placerat=dictumst&ante=morbi&nulla=vestibulum&justo=velit&aliquam=id&quis=pretium&turpis=iaculis&eget=diam&elit=erat&sodales=fermentum&scelerisque=justo&mauris=nec&sit=condimentum&amet=neque&eros=sapien&suspendisse=placerat&accumsan=ante&tortor=nulla&quis=justo&turpis=aliquam&sed=quis&ante=turpis&vivamus=eget&tortor=elit&duis=sodales&mattis=scelerisque&egestas=mauris&metus=sit&aenean=amet&fermentum=eros&donec=suspendisse&ut=accumsan&mauris=tortor&eget=quis&massa=turpis&tempor=sed&convallis=ante&nulla=vivamus&neque=tortor&libero=duis&convallis=mattis&eget=egestas&eleifend=metus&luctus=aenean&ultricies=fermentum&eu=donec&nibh=ut&quisque=mauris&id=eget&justo=massa&sit=tempor&amet=convallis&sapien=nulla&dignissim=neque",
      "text": "odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam",
      "order": 13,
      "organizationID": "b8507122-2a6e-4e8f-aad9-b2f7c811bf21"
    }, {
      "imageURL": "https://ycombinator.com/augue/quam/sollicitudin/vitae/consectetuer/eget.xml?aenean=maecenas&auctor=ut&gravida=massa&sem=quis&praesent=augue&id=luctus&massa=tincidunt&id=nulla&nisl=mollis&venenatis=molestie&lacinia=lorem&aenean=quisque&sit=ut&amet=erat&justo=curabitur&morbi=gravida&ut=nisi&odio=at&cras=nibh&mi=in&pede=hac&malesuada=habitasse&in=platea&imperdiet=dictumst&et=aliquam&commodo=augue&vulputate=quam&justo=sollicitudin&in=vitae&blandit=consectetuer&ultrices=eget&enim=rutrum&lorem=at&ipsum=lorem&dolor=integer&sit=tincidunt&amet=ante&consectetuer=vel&adipiscing=ipsum&elit=praesent&proin=blandit&interdum=lacinia&mauris=erat&non=vestibulum&ligula=sed&pellentesque=magna&ultrices=at&phasellus=nunc&id=commodo&sapien=placerat&in=praesent&sapien=blandit&iaculis=nam&congue=nulla&vivamus=integer&metus=pede&arcu=justo&adipiscing=lacinia&molestie=eget&hendrerit=tincidunt&at=eget&vulputate=tempus&vitae=vel&nisl=pede&aenean=morbi&lectus=porttitor&pellentesque=lorem&eget=id&nunc=ligula&donec=suspendisse&quis=ornare&orci=consequat&eget=lectus&orci=in&vehicula=est&condimentum=risus&curabitur=auctor&in=sed",
      "text": "a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet",
      "order": 14,
      "organizationID": "ad279529-db0c-4057-8140-42fab605a83f"
    }, {
      "imageURL": "https://opera.com/lorem/ipsum/dolor/sit/amet/consectetuer/adipiscing.jpg?luctus=semper&et=rutrum&ultrices=nulla&posuere=nunc&cubilia=purus&curae=phasellus&donec=in&pharetra=felis&magna=donec&vestibulum=semper&aliquet=sapien&ultrices=a&erat=libero&tortor=nam&sollicitudin=dui&mi=proin&sit=leo&amet=odio&lobortis=porttitor&sapien=id&sapien=consequat&non=in&mi=consequat&integer=ut&ac=nulla&neque=sed&duis=accumsan&bibendum=felis&morbi=ut&non=at&quam=dolor&nec=quis&dui=odio&luctus=consequat&rutrum=varius&nulla=integer&tellus=ac&in=leo&sagittis=pellentesque&dui=ultrices&vel=mattis&nisl=odio&duis=donec&ac=vitae&nibh=nisi&fusce=nam&lacus=ultrices&purus=libero&aliquet=non&at=mattis&feugiat=pulvinar&non=nulla&pretium=pede&quis=ullamcorper&lectus=augue&suspendisse=a&potenti=suscipit&in=nulla&eleifend=elit&quam=ac&a=nulla&odio=sed&in=vel&hac=enim&habitasse=sit&platea=amet&dictumst=nunc&maecenas=viverra&ut=dapibus&massa=nulla&quis=suscipit",
      "text": "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu",
      "order": 15,
      "organizationID": "847ff836-c7d3-4ed3-b864-5f716f235cea"
    }, {
      "imageURL": "https://ucsd.edu/magna/vulputate/luctus/cum/sociis/natoque.html?ipsum=sed&dolor=ante&sit=vivamus&amet=tortor&consectetuer=duis&adipiscing=mattis&elit=egestas&proin=metus&risus=aenean&praesent=fermentum&lectus=donec&vestibulum=ut&quam=mauris&sapien=eget&varius=massa&ut=tempor&blandit=convallis&non=nulla&interdum=neque&in=libero&ante=convallis&vestibulum=eget&ante=eleifend&ipsum=luctus&primis=ultricies&in=eu&faucibus=nibh&orci=quisque&luctus=id&et=justo&ultrices=sit&posuere=amet&cubilia=sapien&curae=dignissim&duis=vestibulum&faucibus=vestibulum&accumsan=ante&odio=ipsum&curabitur=primis&convallis=in&duis=faucibus&consequat=orci&dui=luctus&nec=et&nisi=ultrices&volutpat=posuere&eleifend=cubilia&donec=curae&ut=nulla&dolor=dapibus&morbi=dolor&vel=vel&lectus=est",
      "text": "proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
      "order": 16,
      "organizationID": "a0e3f298-3309-4346-a79f-8df159ed9b2a"
    }, {
      "imageURL": "http://statcounter.com/blandit/ultrices/enim.xml?pellentesque=vivamus&viverra=vestibulum&pede=sagittis&ac=sapien&diam=cum&cras=sociis&pellentesque=natoque&volutpat=penatibus&dui=et&maecenas=magnis&tristique=dis&est=parturient&et=montes&tempus=nascetur&semper=ridiculus&est=mus&quam=etiam&pharetra=vel&magna=augue&ac=vestibulum&consequat=rutrum&metus=rutrum&sapien=neque&ut=aenean&nunc=auctor&vestibulum=gravida&ante=sem&ipsum=praesent&primis=id&in=massa&faucibus=id&orci=nisl&luctus=venenatis&et=lacinia&ultrices=aenean&posuere=sit&cubilia=amet&curae=justo&mauris=morbi&viverra=ut&diam=odio&vitae=cras&quam=mi&suspendisse=pede&potenti=malesuada&nullam=in&porttitor=imperdiet&lacus=et&at=commodo&turpis=vulputate&donec=justo&posuere=in&metus=blandit&vitae=ultrices&ipsum=enim&aliquam=lorem&non=ipsum",
      "text": "lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat",
      "order": 17,
      "organizationID": "0faadc69-c60f-446d-a0aa-692bf4bf10dd"
    }, {
      "imageURL": "https://macromedia.com/morbi.jsp?eget=in&rutrum=blandit&at=ultrices&lorem=enim&integer=lorem&tincidunt=ipsum&ante=dolor&vel=sit&ipsum=amet&praesent=consectetuer&blandit=adipiscing&lacinia=elit&erat=proin&vestibulum=interdum",
      "text": "turpis integer aliquet massa id lobortis convallis tortor risus dapibus",
      "order": 18,
      "organizationID": "d6cf8ab4-dfa1-44aa-9bb5-ed710f00943a"
    }, {
      "imageURL": "https://dagondesign.com/nulla.aspx?elementum=faucibus&pellentesque=accumsan&quisque=odio&porta=curabitur&volutpat=convallis&erat=duis",
      "text": "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie",
      "order": 19,
      "organizationID": "594ec99e-eece-4849-83a2-47cd326ed6e7"
    }, {
      "imageURL": "http://cdc.gov/neque/aenean/auctor/gravida/sem/praesent.jsp?ut=massa&tellus=id&nulla=nisl&ut=venenatis&erat=lacinia&id=aenean&mauris=sit&vulputate=amet&elementum=justo&nullam=morbi&varius=ut&nulla=odio&facilisi=cras&cras=mi&non=pede&velit=malesuada&nec=in",
      "text": "sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc",
      "order": 20,
      "organizationID": "3008a556-3259-4c54-978e-b8989ad3ffd8"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('People', null, {});
  }
};
