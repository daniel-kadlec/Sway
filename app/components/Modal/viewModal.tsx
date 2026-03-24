import { useModal } from "@/app/Context/ModalContext";
import Button from "@/app/components/button";
import ContextMenu from "@/app/components/context-menu";
import {IoClose, IoEllipsisHorizontal, IoMail, IoCall, IoGlobeOutline, IoLogoInstagram} from "react-icons/io5";

import { FaForward } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaFlagCheckered } from "react-icons/fa";
import { TbReload } from "react-icons/tb";




type ViewModalProps = {
    data?: any;
};

function InfoItem({icon: Icon, value, href}: {
    icon: any;
    label: string;
    value?: string;
    href?: string;
}) {
    const content = value || "—";

    return (
        <div className="flex items-center gap-5">
            <Icon className="text-primary size-11 cursor-pointer" />

            <div className="min-w-0">
                {href ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-3xl text-black hover:underline break-all"
                    >
                        {content}
                    </a>
                ) : (
                    <p className="text-3xl text-black break-all">{content}</p>
                )}
            </div>
        </div>
    );
}


export default function ViewModal({ data }: ViewModalProps) {
    const { closeModal, openModal } = useModal();

    const ContextMenuContent = (
        <div className={' flex flex-col items-center justify-center gap-3 p-2 w-full'}>
            <Button onClick={()=> openModal('finish')} className={'icon-button w-full bg-success-light! text-success!'}>
                <FaFlagCheckered className={'mt-0.5'}/>
                Finish
            </Button>
            <Button className={'icon-button w-full bg-lightgray! text-darkgray!'}>
                <TbReload className={'mt-0.5'}/>
                Reset
            </Button>
        </div>
    );

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl font-bold text-primary">
                    View lead
                </h2>

                <div className="flex items-center gap-3">
                    <ContextMenu content={ContextMenuContent}>
                        <button className="size-12 flex items-center justify-center rounded-full bg-primary-light transition cursor-pointer hover:opacity-90">
                            <IoEllipsisHorizontal className="text-primary size-8" />
                        </button>
                    </ContextMenu>
                    <button className="size-12 flex items-center justify-center rounded-full bg-primary-light transition cursor-pointer hover:opacity-90">
                        <FaForward className="text-primary size-5 ml-1" />
                    </button>

                    <button
                        onClick={() => closeModal()}
                        className="size-12 flex items-center justify-center rounded-full bg-primary-light transition cursor-pointer hover:opacity-90"
                    >
                        <IoClose className="text-primary size-8" />
                    </button>
                </div>
            </div>

            <div>
                {/* Company */}
                <h3 className="text-5xl font-bold text-black mb-10">
                    El Toro
                </h3>

                {/* Contact details */}
                <div className="grid grid-cols-2 gap-x-14 gap-y-6">
                    <InfoItem
                        icon={IoLogoInstagram}
                        label="Instagram"
                        // value={instagram}
                        // href={
                        //     data?.instagramUrl ||
                        //     (instagram && instagram !== "—"
                        //         ? `https://instagram.com/${String(instagram).replace(
                        //             "@",
                        //             ""
                        //         )}`
                        //         : undefined)
                        /*}*/
                    />

                    <InfoItem
                        icon={IoMail}
                        label="Email"
                        // value={email}
                        // href={
                        //     email && email !== "—"
                        //         ? `mailto:${email}`
                        //         : undefined
                        // }
                    />

                    <InfoItem
                        icon={IoGlobeOutline}
                        label="Website"
                        // value={website}
                        // href={
                        //     data?.websiteUrl ||
                        //     (website && website !== "—"
                        //         ? `https://${website.replace(/^https?:\/\//, "")}`
                        //         : undefined)
                        // }
                    />

                    <InfoItem
                        icon={IoCall}
                        label="Phone"
                        // value={phone}
                        // href={
                        //     phone && phone !== "—"
                        //         ? `tel:${phone.replace(/\s/g, "")}`
                        //         : undefined
                        // }
                    />
                </div>

                {/* Note */}
                <div className="mt-10 rounded-2xl bg-[#FFF4CC] px-6 py-5 flex items-start gap-4">
                    <div className="size-10 rounded-xl flex items-center justify-center shrink-0">
                        <IoChatbubbleEllipsesOutline className="text-[#F2B400] size-9" />
                    </div>

                    <p className="text-xl leading-relaxed text-[#4B4B4B]">
                        Lorem ipsum doler negr cerny sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Timeline */}
                <div>

                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-14">
                    <Button
                        className="!bg-error-light !text-error icon-button"
                        onClick={() => data?.onDelete?.(data)}
                    >
                        <FaTrash className="size-4" />
                        Delete
                    </Button>

                    <Button
                        className="bg-primary-light! text-primary! icon-button"
                        onClick={() => openModal("edit", data)}
                    >
                        <FaPen className="size-4" />
                        Edit
                    </Button>
                </div>
            </div>
        </>
    );
}