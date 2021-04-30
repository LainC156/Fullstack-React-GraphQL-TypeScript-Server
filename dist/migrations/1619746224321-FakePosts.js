"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakePosts1619746224321 = void 0;
class FakePosts1619746224321 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
            insert into post (title, text, creatorId, email) values ('Warm December, A', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 1, 'hlidster0@fastcompany.com');
insert into post (title, text, creatorId, email) values ('If I Stay', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 1, 'mcalderwood1@hubpages.com');
insert into post (title, text, creatorId, email) values ('And Starring Pancho Villa as Himself', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 1, 'hsimonsson2@alibaba.com');
insert into post (title, text, creatorId, email) values ('Under the Yum Yum Tree', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, 'hvasyukhichev3@jigsy.com');
insert into post (title, text, creatorId, email) values ('Double Impact', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, 'spearcy4@yellowbook.com');
insert into post (title, text, creatorId, email) values ('Madagascar 3: Europe''s Most Wanted', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.', 1, 'ghinchshaw5@bigcartel.com');
insert into post (title, text, creatorId, email) values ('In the House', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, 'pbrydson6@last.fm');
insert into post (title, text, creatorId, email) values ('Wonderful World of the Brothers Grimm, The', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 1, 'cvickarman7@springer.com');
insert into post (title, text, creatorId, email) values ('All Together', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, 'tbeckles8@skype.com');
insert into post (title, text, creatorId, email) values ('Good Year, A', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, 'mmurrey9@usatoday.com');
insert into post (title, text, creatorId, email) values ('Teenage Mutant Ninja Turtles: Turtles Forever', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, 'barnauda@baidu.com');
insert into post (title, text, creatorId, email) values ('Cops and Robbersons', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, 'hbrunonb@home.pl');
insert into post (title, text, creatorId, email) values ('Haywire', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 1, 'ademongec@networkadvertising.org');
insert into post (title, text, creatorId, email) values ('Here Comes the Boom', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 1, 'aelstowd@mysql.com');
insert into post (title, text, creatorId, email) values ('One, The', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, 'rliee@bbb.org');
insert into post (title, text, creatorId, email) values ('Wolf', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, 'nchasmoorf@seesaa.net');
insert into post (title, text, creatorId, email) values ('Jim Breuer: And Laughter for All', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, 'vsousag@abc.net.au');
insert into post (title, text, creatorId, email) values ('Home Sweet Hell', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 1, 'nsnalomh@umich.edu');
insert into post (title, text, creatorId, email) values ('Kidnap Syndicate', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 1, 'aricardsi@bandcamp.com');
insert into post (title, text, creatorId, email) values ('Knowing', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, 'cdadswellj@sina.com.cn');
insert into post (title, text, creatorId, email) values ('Ankur (The Seedling)', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, 'curiank@soup.io');
insert into post (title, text, creatorId, email) values ('Eraser', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, 'chellsdonl@php.net');
insert into post (title, text, creatorId, email) values ('Frisco Jenny', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, 'gcroserm@twitter.com');
insert into post (title, text, creatorId, email) values ('Sharknado 2: The Second One', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, 'phowsn@wikispaces.com');
insert into post (title, text, creatorId, email) values ('Renaissance Man', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, 'psandbatcho@google.ru');
insert into post (title, text, creatorId, email) values ('Trails (Veredas)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, 'tambrozp@archive.org');
insert into post (title, text, creatorId, email) values ('Killer Holiday', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 1, 'mtribellq@guardian.co.uk');
insert into post (title, text, creatorId, email) values ('Witches, The (Le streghe)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 1, 'achurchardr@upenn.edu');
insert into post (title, text, creatorId, email) values ('This Gun for Hire', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, 'rdutsons@baidu.com');
insert into post (title, text, creatorId, email) values ('Off the Menu: The Last Days of Chasen''s', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 1, 'gbrodestt@joomla.org');
            `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE post drop column points`);
        });
    }
}
exports.FakePosts1619746224321 = FakePosts1619746224321;
//# sourceMappingURL=1619746224321-FakePosts.js.map