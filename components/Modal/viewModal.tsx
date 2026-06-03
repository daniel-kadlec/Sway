import { useModal } from "@/context/ModalContext";
import Button from "@/components/button";
import ContextMenu from "@/components/context-menu";
import {IoClose, IoEllipsisHorizontal, IoMail, IoCall, IoGlobeOutline, IoLogoInstagram} from "react-icons/io5";
import { FaForward } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaFlagCheckered } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { FaClock } from "react-icons/fa";
import {getLeadContacts} from "@/lib/utils/data/contactMap";
import { deleteLead } from "@/lib/utils/data/leads";
import {useToast} from "@/context/ToastContext";
import AdvanceLead from "@/components/Lead Actions/advanceLeadButton";
import FinishLead from "@/components/Lead Actions/finishLead";
import SetPendingLead from "@/components/Lead Actions/setPendingLead";
import RollbackLead from "@/components/Lead Actions/rollbackLead";
import ResetLead from "@/components/Lead Actions/resetlead";

type ViewModalProps = {
    data?: any;
};
function InfoItem({icon: Icon, value, href}: {
    icon: any;
    label: string;
    value?: string | null;
    href?: string;
}) {
    if (!value) return null;

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
                        {value}
                    </a>
                ) : (
                    <p className="text-3xl text-black break-all">{value}</p>
                )}
            </div>
        </div>
    );
}


export default function ViewModal({ data }: ViewModalProps) {
    const { closeModal, openModal } = useModal();
    const {showToast} = useToast()

    const contacts = getLeadContacts(data);

    const handleDelete = () => {
        try {
            deleteLead(data.id);
            closeModal();
            showToast("Lead deleted successfully", "", "success");
        }
        catch{
            showToast("Error", "", "error");

        }
    }

    const ContextMenuContent = (
        <div className={' flex flex-col items-center justify-center gap-3 p-2 w-full'}>
            <FinishLead/>
            <SetPendingLead id={data.id}/>
            <RollbackLead id={data.id}/>
            <ResetLead id={data.id}/>
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
                   <AdvanceLead id={data.id}/>

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
                <h3 className="text-5xl font-bold text-black mt-10">
                    {data.companyName}
                </h3>

                {/* Contact details */}
                <div className="grid grid-cols-2 gap-x-14 gap-y-6 mt-10">
                    <InfoItem
                        icon={IoLogoInstagram}
                        label="Instagram"
                        value={contacts.instagram}
                         href={
                             data?.instagramUrl ||
                             (contacts.instagram && contacts.instagram !== "—"
                                 ? `https://instagram.com/${String(contacts.instagram).replace(
                                    "@",
                                    ""
                               )}`
                                 : undefined)
                        }
                    />

                    <InfoItem
                        icon={IoMail}
                        label="Email"
                        value={contacts.email}
                        href={
                            contacts.email && contacts.email !== "—"
                                ? `mailto:${contacts.email}`
                                : undefined
                        }
                    />

                    <InfoItem
                        icon={IoGlobeOutline}
                        label="Website"
                        value={data.website}
                        href={
                            data?.websiteUrl ||
                            (data.website && data.website !== "—"
                                ? `https://${data.website.replace(/^https?:\/\//, "")}`
                                : undefined)
                        }
                    />

                    <InfoItem
                        icon={IoCall}
                        label="Phone"
                        value={contacts.phone}
                        href={
                            contacts.phone && contacts.phone !== "—"
                                ? `tel:${contacts.phone.replace(/\s/g, "")}`
                                : undefined
                        }
                    />
                </div>

                {/* Note */}
                {data.note && (
                    <div className="mt-10 rounded-2xl bg-[#FFF4CC] px-6 py-5 flex items-start gap-4">
                        <div className="size-10 rounded-xl flex items-center justify-center shrink-0">
                            <IoChatbubbleEllipsesOutline className="text-[#F2B400] size-9"/>
                        </div>

                        <p className="text-xl mt-[3px] leading-relaxed text-[#4B4B4B]">
                            {data.note}
                        </p>
                    </div>
                )}


                {/* Timeline */}
                <div>

                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-14">
                    <Button
                        destructive={true}
                        className="!bg-error-light !text-error icon-button"
                        onClickAction={() => handleDelete()}
                    >
                        <FaTrash className="size-4" />
                        Delete
                    </Button>

                    <Button
                        className="bg-primary-light! text-primary! icon-button"
                        onClickAction={() => openModal('edit', data)}
                    >
                        <FaPen className="size-4" />
                        Edit
                    </Button>
                </div>
            </div>
        </>
    );
}